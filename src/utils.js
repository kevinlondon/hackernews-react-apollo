function timeDifference(current, previous) {

  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = current - previous

  console.log(elapsed, current, previous)
  if (elapsed < msPerMinute / 3) {
    return ' just now'
  } else if (elapsed < msPerMinute) {
    return ' less than 1 minute ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' min ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed/msPerHour) + ' hours ago'
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed/msPerDay) + ' days ago'
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed/msPerMonth) + ' months ago'
  } else {
    return Math.round(elapsed/msPerYear) + ' years ago'
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}
