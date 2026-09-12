> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareclock/isrunning](https://developer.apple.com/documentation/coreaudio/audiohardwareclock/isrunning)

# isRunning

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where a value of false indicates the device is not providing timestamps and a value of true means that it is.

## Declaration

```swift
var isRunning: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

The notification for this property is usually sent from the device’s IO thread.
