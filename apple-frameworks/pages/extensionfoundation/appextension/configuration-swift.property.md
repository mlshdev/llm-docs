> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextension/configuration-swift.property](https://developer.apple.com/documentation/extensionfoundation/appextension/configuration-swift.property)

# configuration

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 9.0+

The configuration details for this app extension.

## Declaration

```swift
@MainActor @preconcurrency var configuration: Self.Configuration { get }
```

<a id="discussion"></a>

## Discussion

Implement this property in your custom type and use it to store the configuration details for your app extension. As part of the configuration, provide code to establish an XPC connection back to the host app.

If your app extension sends only data to the host app, and doesn’t provide a UI, use this property to store a type that implements the [AppExtensionConfiguration](../appextensionconfiguration.md) protocol. If your extension provides UI elements for the host app to display, instead store an instance of the [AppExtensionSceneConfiguration](../../extensionkit/appextensionsceneconfiguration.md) type.

## See Also

### Configuring the app extension

- [Configuration](configuration-swift.associatedtype.md): A type that manages configuration data for an app extension.
