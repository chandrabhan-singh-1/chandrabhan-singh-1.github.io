// import react from "react"

const Contact = () => {
	return(
		<div className="contact">
			<main>
				<h1>Contact Us</h1>

				<form>
					<div>
						<label>Name: </label>
						<input type="text" required placeholder="Name" />
					</div>
					<div>
						<label>Email: </label>
						<input type="email" required placeholder="Email" />
					</div>
					<div>
						<label>Phone: </label>
						<input type="tel" required placeholder="Contact Number" />
					</div>
					<div className="message">
						<label>Message: </label>
						<input type="text" required placeholder="Write your query" />
					</div>
						<button type="submit">Submit</button>
				</form>
			</main>
		</div>
	);
}

export default Contact;