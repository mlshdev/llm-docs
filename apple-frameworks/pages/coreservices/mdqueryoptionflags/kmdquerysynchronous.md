> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mdqueryoptionflags/kmdquerysynchronous](https://developer.apple.com/documentation/coreservices/mdqueryoptionflags/kmdquerysynchronous)

# kMDQuerySynchronous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specifies that a query should block during the initial gather phase. The query’s run loop will run in the default mode. If this option is not specified the query function returns immediately after starting the query asynchronously.

## Declaration

```objectivec
kMDQuerySynchronous = 1
```
