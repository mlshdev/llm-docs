> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/formstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/formstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a view that represents the body of a form.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the form.

<a id="return-value"></a>

## Return Value

A view that has behavior and appearance that enables it to function as a [Form](../form.md).

## See Also

### Creating custom form styles

- [FormStyle.Configuration](configuration.md): The properties of a form instance.
- [Body](body.md): A view that represents the appearance and interaction of a form.
