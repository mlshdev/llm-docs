> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionprocess/invalidate()](https://developer.apple.com/documentation/extensionfoundation/appextensionprocess/invalidate())

# invalidate()

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Invalidates the host app’s connection to the app extension process.

## Declaration

```swift
func invalidate()
```

## Mentioned In

- [Adding support for app extensions to your app](../adding-support-for-app-extensions-to-your-app.md)

<a id="discussion"></a>

## Discussion

Call this method when you finish communicating with an app extension and no longer need it. If the current object represents the last connection to the app extension, the system terminates the app extension’s process. After calling this method, don’t try to communicate with the app extension using XPC. Instead, remove any references to the app extension and release this `AppExtensionProcess` type.
