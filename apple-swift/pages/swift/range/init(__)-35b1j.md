> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/init(_:)-35b1j](https://developer.apple.com/documentation/swift/range/init(_:)-35b1j)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Now that Range is conditionally a collection when Bound: Strideable, CountableRange is no longer needed. This is a deprecated initializer for any remaining uses of Range(countableRange).

## Declaration

```swift
init(_ other: Range<Bound>)
```
