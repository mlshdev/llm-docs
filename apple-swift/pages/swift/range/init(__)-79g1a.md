> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/init(_:)-79g1a](https://developer.apple.com/documentation/swift/range/init(_:)-79g1a)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance equivalent to the given `ClosedRange`.

## Declaration

```swift
init(_ other: ClosedRange<Bound>)
```

## Parameters

- `other`: A closed range to convert to a `Range` instance.

<a id="discussion"></a>

## Discussion

An equivalent range must be representable as an instance of Range. For example, passing a closed range with an upper bound of `Int.max` triggers a runtime error, because the resulting half-open range would require an upper bound of `Int.max + 1`, which is not representable as an `Int`.
