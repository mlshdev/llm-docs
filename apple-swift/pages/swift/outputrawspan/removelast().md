> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/removelast()](https://developer.apple.com/documentation/swift/outputrawspan/removelast())

# removeLast()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Remove the last byte from this span.

## Declaration

```swift
@discardableResult mutating func removeLast() -> UInt8
```

<a id="return-value"></a>

## Return Value

The removed byte.

<a id="discussion"></a>

## Discussion

Returns the last byte. The `OutputRawSpan` must not be empty.
