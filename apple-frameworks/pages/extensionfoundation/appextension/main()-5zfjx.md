> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextension/main()-5zfjx](https://developer.apple.com/documentation/extensionfoundation/appextension/main()-5zfjx)

# main()

**Framework:** ExtensionFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 9.0+

The main entry point for an app extension that doesn’t present any UI.

## Declaration

```swift
@MainActor @preconcurrency static func main() throws
```

<a id="discussion"></a>

## Discussion

Don’t call this method directly. When the host launches your app extension in a new process, the system calls this method to create your custom [AppExtension](../appextension.md) type and prepare your extension for requests from the host app.

## See Also

### Running the main event loop

- [main()](main%28%29-w0u9.md): Conforms when `Configuration` is `AppExtensionSceneConfiguration`. The main entry point for an app extension that doesn’t present any UI.
