> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitviewstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/navigationsplitviewstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a view that represents the body of a navigation split view.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the instance to create.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method for each instance of [NavigationSplitView](../navigationsplitview.md), where this style is the current [NavigationSplitViewStyle](../navigationsplitviewstyle.md).

## See Also

### Creating custom styles

- [NavigationSplitViewStyle.Configuration](configuration.md): The properties of a navigation split view instance.
- [Body](body.md): A view that represents the body of a navigation split view.
