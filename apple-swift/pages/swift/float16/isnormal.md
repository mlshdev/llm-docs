> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/isnormal](https://developer.apple.com/documentation/swift/float16/isnormal)

# isNormal

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value indicating whether this instance is normal.

## Declaration

```swift
var isNormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

A *normal* value is a finite number that uses the full precision available to values of a type. Zero is neither a normal nor a subnormal number.
