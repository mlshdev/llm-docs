> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/int16/bigendian

# bigEndian

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The big-endian representation of this integer.

## Declaration

```swift
var bigEndian: Self { get }
```

<a id="discussion"></a>

## Discussion

If necessary, the byte order of this value is reversed from the typical byte order of this integer type. On a big-endian platform, for any integer `x`, `x == x.bigEndian`.
