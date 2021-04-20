<nav
	class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
	<div class="container">

		<!-- Brand -->
		<a class="navbar-brand waves-effect" href="/"> <strong
			class="blue-text">Sorting Visualization</strong>
		</a>

		<!-- Collapse -->
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- Links -->
		<div class="collapse navbar-collapse" id="navbarSupportedContent">

			<!-- Left -->
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
				<div id="arraySize" class="font-weight-bold">Change Array Size &ensp; </div>
				<div class="separator"></div>
          </li>
          <li class="nav-item">
            <input class="input-lg" type="range" min="05" max="300" id="changeSize"
			style="background: white; cursor: pointer;" onchange="drawMaterial(this.value)">
          </li> 
			</ul>

			<!-- Right -->
			<ul class="navbar-nav nav-flex-icons">
				<li><div class="dropdown">
						<a id="sortTitle"
							class="dropbtn clearfix d-none d-sm-inline-block">Select
							Sorting </a>
						<div class="dropdown-content">
							<a onclick="bubbleSort();">Bubble Sort</a> <a
								onclick="insertionSort();">Insertion Sort</a> <a
								onclick="selectionSort();">Selection Sort</a> <a
								onclick="mergeSort();">Merge Sort</a> <a onclick="quickSort();">Quick
								Sort</a>
						</div>
					</div></li>
				<li class="nav-item"><a class="nav-link waves-effect"
					onclick="drawMaterial(-1);"> <span
						class="clearfix d-none d-sm-inline-block"> Shuffle Data!! </span>
				</a></li>
			</ul>
		</div>

	</div>
</nav>