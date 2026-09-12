> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pastebutton/init(supportedtypes:payloadaction:)](https://developer.apple.com/documentation/swiftui/pastebutton/init(supportedtypes:payloadaction:))

# init(supportedTypes:payloadAction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Creates a Paste button that accepts specific types of data from the pasteboard.

> Use the [init(supportedContentTypes:payloadAction:)](init%28supportedcontenttypes_payloadaction_%29.md) initializer instead.

## Declaration

```swift
nonisolated init(supportedTypes: [String], payloadAction: @escaping ([NSItemProvider]) -> Void)
```

## Parameters

- `supportedTypes`: The exact uniform type identifiers supported by the button. If the pasteboard doesn’t contain any of the supported types, the button becomes disabled.
- `payloadAction`: The handler to call when the user clicks the Paste button, and the pasteboard has items that conform to `supportedTypes`. This closure receives an array of item providers that you use to inspect and load the pasteboard data.

<a id="discussion"></a>

## Discussion

Set the contents of `supportedTypes` in order of your app’s preference for its supported types. The Paste button takes the most-preferred type that the pasteboard source supports and delivers this to the `payloadAction` closure.

## See Also

### Deprecated initializers

- [init(supportedTypes:validator:payloadAction:)](init%28supportedtypes_validator_payloadaction_%29.md): Deprecated. Creates a Paste button that accepts specific types of data from the pasteboard, performing a custom validation of the data before sending it to your app.
- [init(supportedContentTypes:validator:payloadAction:)](init%28supportedcontenttypes_validator_payloadaction_%29.md): Deprecated. Creates a Paste button that accepts specific types of data from the pasteboard, performing a custom validation of the data before sending it to your app.
