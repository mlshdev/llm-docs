> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(_:)](https://developer.apple.com/documentation/swiftui/menu/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu based on a style configuration.

## Declaration

```swift
nonisolated init(_ configuration: MenuStyleConfiguration)
```

<a id="discussion"></a>

## Discussion

Use this initializer within the [makeBody(configuration:)](../menustyle/makebody%28configuration_%29.md) method of a [MenuStyle](../menustyle.md) instance to create an instance of the menu being styled. This is useful for custom menu styles that modify the current menu style.

For example, the following code creates a new, custom style that adds a red border around the current menu style:

```swift
struct RedBorderMenuStyle: MenuStyle {
    func makeBody(configuration: Configuration) -> some View {
        Menu(configuration)
            .border(Color.red)
    }
}
```
