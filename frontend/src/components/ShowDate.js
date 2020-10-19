import moment from 'moment'
import 'moment/locale/pl'
moment.locale('pl')

const ShowDate = ({ time, format }) => {
  console.log(moment.locale())
  return moment(time).format(format)
}

export default ShowDate
