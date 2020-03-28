
var $mainDiv = $( "#main" ),
  		str = `
  		<div class="background container-fluid p-3">
		<div class="row">
		<div class="window mx-auto pb-3 my-auto">
		<div class="topbar container-fluid row m-0">
			<div class="d-none d-sm-block col-lg-4 col-sm-3 justify-content-around stripe"></div>
			<div class="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-around title">Intro to Web Technology</div>
			<div class="d-none d-sm-block col-lg-4 col-sm-3 justify-content-around stripe"></div>
		</div>
		<div class="navigationbar container-fluid">
			<div class="row">
				<div class="d-inline-flex px-3">
					<a href="https://github.com/definitelyDaphne"><svg viewBox="0 0 25 26" width="40" height="50"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a>
				</div>
				<div class="d-inline-flex">
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
			</div>
		</div>
			<div class="contentpane mt-3 mx-3">
				<div class="m-3 px-3" id="content">
 				</div>
			</div>
		</div>
	</div>
	</div>
	`,
  		html = $.parseHTML( str );
 
		// Append the parsed HTML
		$mainDiv.append( html );