> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontrollerdelegate/hostviewcontrollerdidactivate(_:)](https://developer.apple.com/documentation/extensionkit/exhostviewcontrollerdelegate/hostviewcontrollerdidactivate(_:))

# hostViewControllerDidActivate(\_:)

**Framework:** ExtensionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

Tells the host that the app extension is active and ready to accept an XPC connection.

## Declaration

```swift
@MainActor optional func hostViewControllerDidActivate(_ viewController: EXHostViewController)
```

## Parameters

- `viewController`: The host view controller that initiated the connection.

## Mentioned In

- [Including extension-based UI in your interface](../including-extension-based-ui-in-your-interface.md)

<a id="discussion"></a>

## Discussion

The host view controller calls this method after it launches an app extension and connects to its remote scene. Use this method to establish an XPC connection to the newly created UI instance.

## See Also

### Responding to activation and deactivation events

- [hostViewControllerWillDeactivate(\_:error:)](hostviewcontrollerwilldeactivate%28__error_%29.md): Tells the host that the app extension disconnected and is no longer available.
