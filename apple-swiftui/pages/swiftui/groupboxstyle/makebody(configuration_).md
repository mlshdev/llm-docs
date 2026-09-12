> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupboxstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/groupboxstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a view representing the body of a group box.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the group box instance being created.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method for each instance of [GroupBox](../groupbox.md) created within a view hierarchy where this style is the current group box style.

## See Also

### Creating custom group box styles

- [GroupBoxStyle.Configuration](configuration.md): The properties of a group box instance.
- [Body](body.md): A view that represents the body of a group box.
