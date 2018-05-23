const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return [year, month].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatDate: formatDate
}