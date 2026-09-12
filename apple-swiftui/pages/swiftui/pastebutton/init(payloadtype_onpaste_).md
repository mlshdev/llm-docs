> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pastebutton/init(payloadtype:onpaste:)](https://developer.apple.com/documentation/swiftui/pastebutton/init(payloadtype:onpaste:))

# init(payloadType:onPaste:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates an instance that accepts values of the specified type.

## Declaration

```swift
nonisolated init<T>(payloadType: T.Type, onPaste: @escaping ([T]) -> Void) where T : Transferable
```

## Parameters

- `onPaste`: The handler to call on trigger of the button with at least one item of the specified `Transferable` type from the pasteboard.

## See Also

### Creating a paste button

- [init(supportedContentTypes:payloadAction:)](init%28supportedcontenttypes_payloadaction_%29.md): Creates a Paste button that accepts specific types of data from the pasteboard.
