> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastactivitycontroller/showbroadcastpicker(at:from:preferredextensionidentifier:completionhandler:)](https://developer.apple.com/documentation/replaykit/rpbroadcastactivitycontroller/showbroadcastpicker(at:from:preferredextensionidentifier:completionhandler:))

# showBroadcastPicker(at:from:preferredExtensionIdentifier:completionHandler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+ (deprecated in 27.0)

Presents a list of available broadcast services for the user to select.

> No longer supported

## Declaration

```swift
class func showBroadcastPicker(at point: CGPoint, from window: NSWindow?, preferredExtensionIdentifier preferredExtension: String?, completionHandler handler: @escaping @Sendable (RPBroadcastActivityController?, (any Error)?) -> Void)
```

```swift
class func showBroadcastPicker(at point: CGPoint, from window: NSWindow?, preferredExtensionIdentifier preferredExtension: String?) async throws -> RPBroadcastActivityController
```

## Parameters

- `point`: The origin point within the specified window.
- `window`: The window presenting the picker. Specify [nil](../../objectivec/nil-227m0.md) to present the picker from the main app window.
- `preferredExtension`: The extension bundle identifier for the preferred broadcast extension service. Specify [nil](../../objectivec/nil-227m0.md) to show all extensions.
- `handler`: The system calls this closure after the user selects a broadcast extension. The system passes the closure the selected broadcast activity controller, or an error if a failure occurred.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func showBroadcastPicker(at point: CGPoint, from window: NSWindow?, preferredExtensionIdentifier preferredExtension: String?) async throws -> RPBroadcastActivityController
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# showBroadcastPickerAtPoint:fromWindow:preferredExtensionIdentifier:completionHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+ (deprecated in 27.0)

Presents a list of available broadcast services for the user to select.

> No longer supported

## Declaration

```objectivec
+ (void) showBroadcastPickerAtPoint:(CGPoint) point fromWindow:(NSWindow *) window preferredExtensionIdentifier:(NSString *) preferredExtension completionHandler:(void (^)(RPBroadcastActivityController *broadcastActivityController, NSError *error)) handler;
```

## Parameters

- `point`: The origin point within the specified window.
- `window`: The window presenting the picker. Specify [nil](../../objectivec/nil-227m0.md) to present the picker from the main app window.
- `preferredExtension`: The extension bundle identifier for the preferred broadcast extension service. Specify [nil](../../objectivec/nil-227m0.md) to show all extensions.
- `handler`: The system calls this closure after the user selects a broadcast extension. The system passes the closure the selected broadcast activity controller, or an error if a failure occurred.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func showBroadcastPicker(at point: CGPoint, from window: NSWindow?, preferredExtensionIdentifier preferredExtension: String?) async throws -> RPBroadcastActivityController
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
