> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontrollerdelegate/hostviewcontrollerwilldeactivate(_:error:)](https://developer.apple.com/documentation/extensionkit/exhostviewcontrollerdelegate/hostviewcontrollerwilldeactivate(_:error:))

# hostViewControllerWillDeactivate(\_:error:)

**Framework:** ExtensionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

Tells the host that the app extension disconnected and is no longer available.

## Declaration

```swift
@MainActor optional func hostViewControllerWillDeactivate(_ viewController: EXHostViewController, error: (any Error)?)
```

## Parameters

- `viewController`: The host view controller that initiated the connection.
- `error`: An error object indicating why the app extension disconnected, or `nil` if the extension exited without issues.

## Mentioned In

- [Including extension-based UI in your interface](../including-extension-based-ui-in-your-interface.md)

<a id="discussion"></a>

## Discussion

The host view controller calls this method when the app extension exits or when you change the view controller’s [configuration](../exhostviewcontroller/configuration-swift.property.md) property. Use this method to close out the previous connection to the app extension.

## See Also

### Responding to activation and deactivation events

- [hostViewControllerDidActivate(\_:)](hostviewcontrollerdidactivate%28__%29.md): Tells the host that the app extension is active and ready to accept an XPC connection.
