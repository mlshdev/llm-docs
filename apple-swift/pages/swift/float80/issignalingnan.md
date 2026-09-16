> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/issignalingnan

# isSignalingNaN

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the instance is a signaling NaN.

## Declaration

```swift
var isSignalingNaN: Bool { get }
```

<a id="discussion"></a>

## Discussion

Signaling NaNs typically raise the Invalid flag when used in general computing operations.
