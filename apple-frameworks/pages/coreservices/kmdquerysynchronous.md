> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmdquerysynchronous](https://developer.apple.com/documentation/coreservices/kmdquerysynchronous)

# kMDQuerySynchronous

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specifies that a query should block during the initial gather phase. The query’s run loop will run in the default mode. If this option is not specified the query function returns immediately after starting the query asynchronously.

## Declaration

```swift
var kMDQuerySynchronous: MDQueryOptionFlags { get }
```
