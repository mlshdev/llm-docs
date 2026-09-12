> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareclock/clockdomain](https://developer.apple.com/documentation/coreaudio/audiohardwareclock/clockdomain)

# clockDomain

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A UInt32 whose value indicates the clock domain to which this object belongs. Clocks and devices that have the same value for this property are able to be synchronized in hardware.

## Declaration

```swift
var clockDomain: UInt32 { get throws }
```

<a id="discussion"></a>

## Discussion

A value of 0 indicates that the clock domain for the object is unspecified and should be assumed to be separate from every other object’s clock domain, even if they have the value of 0 as their clock domain as well.
