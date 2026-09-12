> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/disclosuregroupstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/disclosuregroupstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a view that represents the body of a disclosure group.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the instance being created.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method for each instance of [DisclosureGroup](../disclosuregroup.md) that you create within a view hierarchy where this style is the current [DisclosureGroupStyle](../disclosuregroupstyle.md).

## See Also

### Creating custom disclosure group styles

- [DisclosureGroupStyleConfiguration](../disclosuregroupstyleconfiguration.md): The properties of a disclosure group instance.
- [DisclosureGroupStyle.Configuration](configuration.md): The properties of a disclosure group instance.
- [Body](body.md): A view that represents the body of a disclosure group.
