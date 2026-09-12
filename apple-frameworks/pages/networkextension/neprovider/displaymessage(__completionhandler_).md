> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/displaymessage(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/neprovider/displaymessage(_:completionhandler:))

# displayMessage(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · visionOS 1.0+ (deprecated in 1.0)

Call this method from your [NEProvider](../neprovider.md) subclass if you want to display a message to the person using the app.

## Declaration

```swift
func displayMessage(_ message: String, completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func displayMessage(_ message: String) async -> Bool
```

## Parameters

- `message`: The message you want to display to the person using the app.
- `completionHandler`: A block that the system calls after you call this method. The details of the call can vary, as follows:

  - If the system can’t display the message, or if you call the `displayMessage:completionHandler:` method in an [NEFilterDataProvider](../nefilterdataprovider.md) instance, then the system calls the `completionHandler` block immediately after you call the method, and sets the block’s `success` parameter value to [false](https://developer.apple.com/documentation/swift/false).
  - If the system successfully displays the message to the user, then the system calls the `completionHandler` block when the user dismisses the message, and sets the `success` parameter value to [true](https://developer.apple.com/documentation/swift/true).

# displayMessage:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · visionOS 1.0+ (deprecated in 1.0)

Call this method from your [NEProvider](../neprovider.md) subclass if you want to display a message to the person using the app.

## Declaration

```objectivec
- (void) displayMessage:(NSString *) message completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `message`: The message you want to display to the person using the app.
- `completionHandler`: A block that the system calls after you call this method. The details of the call can vary, as follows:

  - If the system can’t display the message, or if you call the `displayMessage:completionHandler:` method in an [NEFilterDataProvider](../nefilterdataprovider.md) instance, then the system calls the `completionHandler` block immediately after you call the method, and sets the block’s `success` parameter value to [false](https://developer.apple.com/documentation/swift/false).
  - If the system successfully displays the message to the user, then the system calls the `completionHandler` block when the user dismisses the message, and sets the `success` parameter value to [true](https://developer.apple.com/documentation/swift/true).
