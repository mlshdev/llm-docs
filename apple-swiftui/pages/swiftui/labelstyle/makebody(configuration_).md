> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labelstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/labelstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a view that represents the body of a label.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the label.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Label](../label.md) instance in a view hierarchy where this style is the current label style.

## See Also

### Creating custom label styles

- [LabelStyle.Configuration](configuration.md): The properties of a label.
- [Body](body.md): A view that represents the body of a label.
