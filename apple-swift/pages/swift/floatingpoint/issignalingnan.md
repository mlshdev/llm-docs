> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpoint/issignalingnan](https://developer.apple.com/documentation/swift/floatingpoint/issignalingnan)

# isSignalingNaN

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the instance is a signaling NaN.

## Declaration

```swift
var isSignalingNaN: Bool { get }
```

<a id="discussion"></a>

## Discussion

Signaling NaNs typically raise the Invalid flag when used in general computing operations.
