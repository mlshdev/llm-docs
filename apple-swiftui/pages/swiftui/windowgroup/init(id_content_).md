> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(id:content:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(id:content:))

# init(id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Creates a window group with an identifier.

> Use the initializer which takes an escaping content builder instead.

## Declaration

```swift
nonisolated init(id: String, @ContentBuilder content: () -> Content)
```

## Parameters

- `id`: A string that uniquely identifies the window group. Identifiers must be unique among the window groups in your app.
- `content`: A closure that creates the content for each instance of the group.

<a id="discussion"></a>

## Discussion

The window group uses the given view as a template to form the content of each window in the group.

## See Also

### Identifying a window group

- [init(\_:id:content:)](init%28__id_content_%29.md): Deprecated. Creates a window group with a text view title and an identifier.
