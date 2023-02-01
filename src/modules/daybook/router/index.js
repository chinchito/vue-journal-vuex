export default {
    // path: '/daybook',
    name: 'daybook-index',
    component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry-selected',
            component: () => import(/* webpackChunkName: "DayBookNoEntrySelected" */ '@/modules/daybook/views/NoEntrySelectedView'),
        },
        {
            path: ':id',
            name: 'entry-selected',
            component: () => import(/* webpackChunkName: "DayBookNoEntrySelected" */ '@/modules/daybook/views/EntryView'),
        },
    ]
}