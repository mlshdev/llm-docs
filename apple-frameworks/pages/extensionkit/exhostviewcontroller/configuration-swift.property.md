> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller/configuration-swift.property](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/configuration-swift.property)

# configuration

**Framework:** ExtensionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

The information the host view controller uses to fetch the appropriate scene from an app extension.

## Declaration

```swift
@MainActor @preconcurrency var configuration: EXHostViewController.Configuration? { get set }
```

## Mentioned In

- [Including extension-based UI in your interface](../including-extension-based-ui-in-your-interface.md)

## See Also

### Configuring the view controller

- [EXHostViewController.Configuration](configuration-swift.struct.md): An object that holds configuration options for a host view controller.
- [placeholderView](placeholderview.md): The view to display when the view controller has no app extension content to display.
