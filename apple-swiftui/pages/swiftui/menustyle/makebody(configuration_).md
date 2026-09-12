> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menustyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/menustyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a view that represents the body of a menu.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the menu.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Menu](../menu.md) instance in a view hierarchy where this style is the current menu style.

## See Also

### Creating custom menu styles

- [MenuStyle.Configuration](configuration.md): The properties of a menu.
- [Body](body.md): A view that represents the body of a menu.
