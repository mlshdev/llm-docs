> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/floatingpoint/isnormal

# isNormal

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this instance is normal.

## Declaration

```swift
var isNormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

A *normal* value is a finite number that uses the full precision available to values of a type. Zero is neither a normal nor a subnormal number.
