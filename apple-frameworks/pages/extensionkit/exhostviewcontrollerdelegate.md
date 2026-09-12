> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontrollerdelegate](https://developer.apple.com/documentation/extensionkit/exhostviewcontrollerdelegate)

# EXHostViewControllerDelegate

**Framework:** ExtensionKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

An interface you use to track the activation and deactivation of an app extension.

## Declaration

```swift
protocol EXHostViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to activation and deactivation events

- [hostViewControllerDidActivate(\_:)](exhostviewcontrollerdelegate/hostviewcontrollerdidactivate%28__%29.md): Tells the host that the app extension is active and ready to accept an XPC connection.
- [hostViewControllerWillDeactivate(\_:error:)](exhostviewcontrollerdelegate/hostviewcontrollerwilldeactivate%28__error_%29.md): Tells the host that the app extension disconnected and is no longer available.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to activation and deactivation events

- [delegate](exhostviewcontroller/delegate.md): A custom delegate object you use to receive notifications about the activation and deactivation of the app extension.
