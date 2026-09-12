> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropinfo/itemproviders(for:)](https://developer.apple.com/documentation/swiftui/dropinfo/itemproviders(for:))

# itemProviders(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Finds item providers that conform to at least one of the specified uniform type identifiers.

## Declaration

```swift
func itemProviders(for contentTypes: [UTType]) -> [NSItemProvider]
```

## Parameters

- `contentTypes`: The uniform type identifiers to query for.

<a id="return-value"></a>

## Return Value

The item providers that conforms to `contentTypes`.

<a id="discussion"></a>

## Discussion

This function is only valid during the `performDrop()` action.
