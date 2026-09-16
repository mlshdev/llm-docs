> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float16/ulpofone

# ulpOfOne

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The unit in the last place of 1.0.

## Declaration

```swift
static var ulpOfOne: Float16 { get }
```

<a id="discussion"></a>

## Discussion

The positive difference between 1.0 and the next greater representable number. The `ulpOfOne` constant corresponds to the C macros `FLT_EPSILON`, `DBL_EPSILON`, and others with a similar purpose.
