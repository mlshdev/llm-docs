> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fixedwidthinteger/bigendian-3he9](https://developer.apple.com/documentation/swift/fixedwidthinteger/bigendian-3he9)

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
