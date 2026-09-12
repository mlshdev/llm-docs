> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/keyaerecordercount](https://developer.apple.com/documentation/coreservices/keyaerecordercount)

# keyAERecorderCount

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Used with the `keyword` parameter of the [AEManagerInfo(\_:\_:)](1449373-aemanagerinfo.md) function. If you pass this value, on return, the `result` parameter supplies the number of processes that are currently recording Apple events.

## Declaration

```swift
var keyAERecorderCount: AEKeyword { get }
```
