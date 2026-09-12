> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/touchbaritempresence/optional(_:)](https://developer.apple.com/documentation/swiftui/touchbaritempresence/optional(_:))

# TouchBarItemPresence.optional(\_:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** macOS 10.15+

The Touch Bar view isn’t visible by default, but appears in the customization palette.

## Declaration

```swift
case optional(String)
```

## Parameters

- `id`: A globally unique identifier for this item.

## See Also

### Getting presence options

- [TouchBarItemPresence.default(\_:)](default%28__%29.md): The Touch Bar view is visible by default, but can be removed during customization.
- [TouchBarItemPresence.required(\_:)](required%28__%29.md): The Touch Bar view is visible by default and cannot be removed during customization.
