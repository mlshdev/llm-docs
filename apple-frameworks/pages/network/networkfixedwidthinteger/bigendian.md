> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkfixedwidthinteger/bigendian

# bigEndian

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The big-endian representation of this integer.

## Declaration

```swift
override var bigEndian: Self { get }
```

<a id="discussion"></a>

## Discussion

If necessary, the byte order of this value is reversed from the typical byte order of this integer type. On a big-endian platform, for any integer `x`, `x == x.bigEndian`.
