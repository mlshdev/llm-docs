> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/primitivebuttonstyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a view that represents the body of a button.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the button.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Button](../button.md) instance in a view hierarchy where this style is the current button style.

## See Also

### Creating custom button styles

- [PrimitiveButtonStyle.Configuration](configuration.md): The properties of a button.
- [Body](body.md): A view that represents the body of a button.
