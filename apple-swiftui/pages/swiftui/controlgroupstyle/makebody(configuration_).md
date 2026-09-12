> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/controlgroupstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a view representing the body of a control group.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the control group instance being created.

<a id="discussion"></a>

## Discussion

This method will be called for each instance of [ControlGroup](../controlgroup.md) created within a view hierarchy where this style is the current `ControlGroupStyle`.

## See Also

### Creating custom control group styles

- [ControlGroupStyle.Configuration](configuration.md): The properties of a `ControlGroup` instance being created.
- [Body](body.md): A view representing the body of a control group.
