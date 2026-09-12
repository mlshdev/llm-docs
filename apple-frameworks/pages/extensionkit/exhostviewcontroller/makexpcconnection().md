> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller/makexpcconnection()](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/makexpcconnection())

# makeXPCConnection()

**Framework:** ExtensionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

Initiates an XPC connection to the app extension’s scene.

## Declaration

```swift
func makeXPCConnection() throws -> NSXPCConnection
```

## Mentioned In

- [Including extension-based UI in your interface](../including-extension-based-ui-in-your-interface.md)

<a id="discussion"></a>

## Discussion

Call this method from the [hostViewControllerDidActivate(\_:)](../exhostviewcontrollerdelegate/hostviewcontrollerdidactivate%28__%29.md) method to initiate a scene-specific connection to the app extension.
