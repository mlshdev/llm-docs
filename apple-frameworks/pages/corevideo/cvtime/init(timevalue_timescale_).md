> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtime/init(timevalue:timescale:)](https://developer.apple.com/documentation/corevideo/cvtime/init(timevalue:timescale:))

# init(timeValue:timeScale:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Initialize a valid CVTime value. Note: When `timeValue` has nonzero value, `timeScale` must be greater than 0.

## Declaration

```swift
@backDeployed(before: macOS 26.0, iOS 26.0, tvOS 26.0, watchOS 26.0, visionOS 26.0)
init(timeValue: Int64, timeScale: Int32)
```
