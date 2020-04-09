
var $mainDiv = $( "#main" ),
  		str = `
  		<div class="background container-fluid p-3">
		<div class="row">
		<div class="window mx-auto pb-3 my-auto">
		<div class="topbar container-fluid row m-0">
			<div class="d-none d-sm-block col-lg-4 col-sm-3 justify-content-around stripe"></div>
			<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-around title"><marquee>Intro to Web Technology</marquee></div>
			<div class="d-none d-sm-block col-lg-4 col-sm-3 justify-content-around stripe"></div>
		</div>
		<div class="navigationbar container-fluid">
			<div class="row">
				
				<div class="d-inline-flex ml-3">
					<button class="styled" id="leftArrow">
						<svg style="width:40px;height:30px" viewBox="0 0 22 25">
    						<path fill="currentColor" d="M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z" />
						</svg>
					</button>
					<button class="styled" id="rightArrow">
						<svg style="width:40px;height:30px" viewBox="0 0 22 25">
    						<path fill="currentColor" d="M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z" />
						</svg>
					</button>
					<button class="styled" id="home">
						<svg style="width:40px;height:30px" viewBox="0 0 22 25">
    						<path fill="currentColor" d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
						</svg>
					</button>
				</div>

				<div class="d-inline-flex ml-3" id="subtitle" style="line-height:1.4em"></div>

			</div>
		</div>
			<div class="contentpane mt-3 mx-3">
				<div class="py-3 px-5 mx-auto" id="content">
 				</div>
			</div>
		</div>
	</div>
	</div>
	`,
  		html = $.parseHTML( str );
 
		// Append the parsed HTML
		$mainDiv.append( html );