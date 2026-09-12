> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropinfo/hasitemsconforming(to:)-47irh](https://developer.apple.com/documentation/swiftui/dropinfo/hasitemsconforming(to:)-47irh)

# hasItemsConforming(to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Indicates whether at least one item conforms to at least one of the specified uniform type identifiers.

## Declaration

```swift
func hasItemsConforming(to contentTypes: [UTType]) -> Bool
```

## Parameters

- `contentTypes`: The uniform type identifiers to query for.

<a id="return-value"></a>

## Return Value

Whether at least one item conforms to one of `contentTypes`.

## See Also

### Checking for items

- [itemProviders(for:)](itemproviders%28for_%29-93409.md): Finds item providers that conform to at least one of the specified uniform type identifiers.
