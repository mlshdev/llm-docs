> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint8/init(ascii:)](https://developer.apple.com/documentation/swift/uint8/init(ascii:))

# init(ascii:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Construct with value `v.value`.

## Declaration

```swift
init(ascii v: Unicode.Scalar)
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> `v.value` can be represented as ASCII (0..\<128).
