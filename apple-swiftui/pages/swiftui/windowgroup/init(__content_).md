> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(_:content:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Creates a window group with a text view title.

> Use the initializer which takes an escaping content builder instead.

## Declaration

```swift
nonisolated init(_ title: Text, @ContentBuilder content: () -> Content)
```

## Parameters

- `title`: The [Text](../text.md) view to use for the group’s title.
- `content`: A closure that creates the content for each instance of the group.

<a id="discussion"></a>

## Discussion

The window group uses the given view as a template to form the content of each window in the group. The system uses the title to distinguish the window group in the user interface, such as in the name of commands associated with the group.

> **Important**

> The system ignores any text styling that you apply to the [Text](../text.md) view title, like bold or italics. However, you can use the formatting controls that the view offers, like for localization, dates, and numerical representations.

## See Also

### Creating a window group

- [init(content:)](init%28content_%29.md): Deprecated. Creates a window group.
