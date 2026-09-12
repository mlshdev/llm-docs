> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/touchbar/init(id:content:)](https://developer.apple.com/documentation/swiftui/touchbar/init(id:content:))

# init(id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a customizable Touch Bar view container with a globally unique identifier.

## Declaration

```swift
init(id: String, @ContentBuilder content: () -> Content)
```

## Parameters

- `id`: A globally unique identifier for this Touch Bar.
- `content`: A collection of views to be displayed by the Touch Bar.

<a id="discussion"></a>

## Discussion

Be sure that each view in `content` has an explicit `touchBarItemPresence` value with customization identifier.

## See Also

### Creating a Touch Bar view

- [init(content:)](init%28content_%29.md): Creates a non-customizable Touch Bar view container.
