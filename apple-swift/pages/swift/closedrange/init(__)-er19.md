> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/init(_:)-er19](https://developer.apple.com/documentation/swift/closedrange/init(_:)-er19)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance equivalent to the given `Range`.

## Declaration

```swift
init(_ other: Range<Bound>)
```

## Parameters

- `other`: A `Range` to convert to a `ClosedRange` instance.

<a id="discussion"></a>

## Discussion

An equivalent range must be representable as a closed range. For example, passing an empty range as `other` triggers a runtime error, because an empty range cannot be represented by a closed range instance.
