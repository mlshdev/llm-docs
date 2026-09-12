> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller/delegate](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/delegate)

# delegate

**Framework:** ExtensionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

A custom delegate object you use to receive notifications about the activation and deactivation of the app extension.

## Declaration

```swift
weak var delegate: (any EXHostViewControllerDelegate)? { get set }
```

## See Also

### Responding to activation and deactivation events

- [EXHostViewControllerDelegate](../exhostviewcontrollerdelegate.md): An interface you use to track the activation and deactivation of an app extension.
