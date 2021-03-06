<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link rel="stylesheet" href="assets/css/style.css" />
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous"
		/>
		<script
			src="https://kit.fontawesome.com/7526ad2636.js"
			crossorigin="anonymous"
		></script>

		<title>Grayson McMurry</title>
	</head>
	<body>
		<div id="snowflakeContainer">
			<span class="snowflake"></span>
		</div>
		<div class="page-bg"></div>
		<nav
			class="navbar sticky-top navbar-expand-md navbar-light bg-light"
			id="navBar"
		>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
					<li class="nav-item">
						<img class="my-logo" src="./assets/images/logo-G.png" />
					</li>
					<li class="nav-item">
						<a class="nav-link" href="index.html"
							><i class="fas fa-home"></i>Home
							<span class="sr-only">(current)</span></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="portfolio.html"
							><i class="fas fa-portrait"></i>Portfolio</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="contact.html"
							><i class="fas fa-at"></i>Contact</a
						>
					</li>
				</ul>
			</div>
		</nav>
		<div class="contactme">
			<div class="col-md-6 contactform">
				<h2>Contact</h2>
				<hr />
				<form
					class="col-md-12"
					id="contact-form"
					method="post"
					role="form"
				>
					<div class="messages"></div>

					<div class="controls">
						<div class="row">
							<div style="padding: 20px;" class="col-md-6">
								<div class="form-group">
									<label for="form_name">Firstname *</label>
									<input
										id="form_name"
										type="text"
										name="name"
										class="form-control"
										placeholder="Please enter your firstname *"
										required="required"
										data-error="Firstname is required."
									/>
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div style="padding: 20px;" class="col-md-6">
								<div class="form-group">
									<label for="form_lastname">Lastname *</label>
									<input
										id="form_lastname"
										type="text"
										name="surname"
										class="form-control"
										placeholder="Please enter your lastname *"
										required="required"
										data-error="Lastname is required."
									/>
									<div class="help-block with-errors"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div style="padding: 20px;" class="col-md-6">
								<div class="form-group">
									<label for="form_email">Email *</label>
									<input
										id="form_email"
										type="email"
										name="email"
										class="form-control"
										placeholder="Please enter your email *"
										required="required"
										data-error="Valid email is required."
									/>
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div style="padding: 20px;" class="col-md-6">
								<div class="form-group">
									<label for="form_need">Please specify your need *</label>
									<select
										id="form_need"
										name="need"
										class="form-control"
										required="required"
										data-error="Please specify your need."
									>
										<option value=""></option>
										<option value="Request Project">Request Project</option>
										<option value="Request order status"
											>Recruiter Looking To Recruit</option
										>
										<option value="Other">Other...</option>
									</select>
									<div class="help-block with-errors"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div style="padding: 20px;" class="col-md-12">
								<div class="form-group">
									<label for="form_message">Message *</label>
									<textarea
										id="form_message"
										name="message"
										class="form-control"
										placeholder="Message for me *"
										rows="4"
										required="required"
										data-error="Please, leave us a message."
									></textarea>
									<div class="help-block with-errors"></div>
								</div>
								<div class="col-md-12 text-center">
									<input
										id="sendBtn"
										type="submit"
										class="btn btn-send"
										value="Send message"
									/>
								</div>
							</div>
						</div>
						<div class="row">
							<div style="padding: 20px;" class="col-md-12">
								<p class="text-muted">
									<strong>*</strong> These fields are required.
								</p>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>

		<!-- Footer -->
		<footer
			id="smallFooter"
			class="page-footer font-small special-color-dark pt-4"
		>
			<!-- Footer Elements -->
			<div class="footerCont container">
				<!-- Social buttons -->
				<ul class="list-unstyled list-inline text-center">
					<li class="list-inline-item bg-dark">
						<a
							href="https://github.com/graysonm23"
							class="btn-floating btn-fb mx-1"
						>
							<i class="fab fa-github"></i>
						</a>
					</li>
					<li class="list-inline-item bg-dark">
						<a
							href="https://app.slack.com/client/TLLL4DXM0/DMH76PT0Q"
							class="btn-floating btn-tw mx-1"
						>
							<i class="fab fa-slack"></i>
						</a>
					</li>
					<li class="list-inline-item bg-dark">
						<a class="btn-floating btn-gplus mx-1">
							<i class="fab fa-google-plus-g"> </i>
						</a>
					</li>
					<li class="list-inline-item bg-dark">
						<a
							href="https://www.linkedin.com/in/grayson-mcmurry-809397163/"
							class="btn-floating btn-li mx-1"
						>
							<i class="fab fa-linkedin-in"> </i>
						</a>
					</li>
					<li class="list-inline-item bg-dark">
						<a
							href="https://stackoverflow.com/users/11872108/grayson-mcmurry"
							class="btn-floating btn-dribbble mx-1"
						>
							<i class="fab fa-stack-overflow"></i>
						</a>
					</li>
				</ul>
				<!-- Social buttons -->
			</div>
			<!-- Footer Elements -->

			<!-- Copyright -->
			<div class="footer-copyright text-center py-3">
				© 2019 Copyright
			</div>
			<!-- Copyright -->
		</footer>
		<script
			src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
			integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
			integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
			crossorigin="anonymous"
		></script>
		<script
			src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
			integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
			integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U="
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
			integrity="sha256-fIkQKQryItPqpaWZbtwG25Jp2p5ujqo/NwJrfqAB+Qk="
			crossorigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js" integrity="sha256-dHf/YjH1A4tewEsKUSmNnV05DDbfGN3g7NMq86xgGh8=" crossorigin="anonymous"></script>
		<script src="./assets/javascript/javascript.js"></script>
	</body>
</html>
