> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/containervalues/hastag(_:)](https://developer.apple.com/documentation/swiftui/containervalues/hastag(_:))

# hasTag(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns true if the container values contain a tag matching a given value.

## Declaration

```swift
func hasTag<V>(_ tag: V) -> Bool where V : Hashable
```

## Parameters

- `tag`: The tag value to check for.

<a id="return-value"></a>

## Return Value

If the container values has a tag matching the given value.

<a id="discussion"></a>

## Discussion

Tag values are set using the `View/tag` modifier.
