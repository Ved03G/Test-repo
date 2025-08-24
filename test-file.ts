// test-file.ts

const ADMIN_ROLE = 1;
const EDITOR_ROLE = 2;

// ISSUE 1: HIGH COMPLEXITY
function processUserData(user: any, data: any, mode: string) {
  let score = 0;
  if (mode === 'A' && user.active) {
    if (data.value > 100) {
      for (let i = 0; i < 5; i++) {
        while (data.items[i]) {
          if (user.role === ADMIN_ROLE) {
            // This function is intentionally complex
            score += 10;
          } else if (user.role === EDITOR_ROLE) {
            score += 5;
          }
        }
      }
    }
  } else if (mode === 'B' || mode === 'C') {
    score = -1;
  }
  return score;
}

class UserManager {
  process() {
    // ISSUE 2: DUPLICATE CODE
    // This block is a duplicate of the one below
    const normalizedName = 'test_user'.trim().toLowerCase();
    const timestamp = Date.now();
    const result = `${normalizedName}@${timestamp}`;
    console.log(result);
  }
}

class SystemManager {
  run() {
    // ISSUE 2: DUPLICATE CODE
    // This block is a duplicate of the one above
    const normalizedName = 'test_user'.trim().toLowerCase();
    const timestamp = Date.now();
    const result = `${normalizedName}@${timestamp}`;
    console.log(result);
  }

  // ISSUE 3: MAGIC NUMBER
  checkStatus() {
    // The number 86400 is a "magic number"
    if (Date.now() > 86400) {
        return 'expired';
    }
  }
}
