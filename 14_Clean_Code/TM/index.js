function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;

  return doSomething(user);
}


function processUser(user) {
  if (!isValidCandidate(user)) return null;

  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}