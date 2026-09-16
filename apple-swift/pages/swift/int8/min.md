> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/int8/min

# min

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum representable integer in this type.

## Declaration

```swift
static var min: Self { get }
```

<a id="discussion"></a>

## Discussion

For signed integer types, this value is `-(2 ** (bitWidth - 1))`, where `**` is exponentiation.
