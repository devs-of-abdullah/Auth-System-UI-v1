const API_URL = "https://localhost:5215/api/auth";
export async function login({ email, password }) {
  
    const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    });

     if (!res.ok) {
        throw new Error("Invalid Credintials");
     }
     return res.json();

}

export async function refreshToken({ email, refreshToken }) {
  
    const res = await fetch(`${API_URL}/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, refreshToken }),
     });

  if (!res.ok) {
    throw new Error("Session expired");
  }
  return res.json();
}
export async function logout({ email, refreshToken }) {
    
    await fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, refreshToken }),
    });

}
