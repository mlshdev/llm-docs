> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupbox/init(_:)](https://developer.apple.com/documentation/swiftui/groupbox/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a group box based on a style configuration.

## Declaration

```swift
nonisolated init(_ configuration: GroupBoxStyleConfiguration)
```

## Parameters

- `configuration`: The properties of the group box instance being created.

<a id="discussion"></a>

## Discussion

Use this initializer within the [makeBody(configuration:)](../groupboxstyle/makebody%28configuration_%29.md) method of a [GroupBoxStyle](../groupboxstyle.md) instance to create a styled group box, with customizations, while preserving its existing style.

The following example adds a pink border around the group box, without overriding its current style:

```swift
struct PinkBorderGroupBoxStyle: GroupBoxStyle {
    func makeBody(configuration: Configuration) -> some View {
        GroupBox(configuration)
            .border(Color.pink)
    }
}
```
