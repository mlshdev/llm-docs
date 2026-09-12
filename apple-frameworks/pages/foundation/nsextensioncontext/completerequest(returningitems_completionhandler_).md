> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/completerequest(returningitems:completionhandler:)](https://developer.apple.com/documentation/foundation/nsextensioncontext/completerequest(returningitems:completionhandler:))

# completeRequest(returningItems:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the host app to complete the app extension request with an array of result items.

## Declaration

```swift
func completeRequest(returningItems items: [Any]?, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

## Parameters

- `items`: An array of result items, each an [NSExtensionItem](../nsextensionitem.md) object, to return to the host app.
- `completionHandler`: An optional block to be called when the request completes, performed as a background priority task.

  The block takes the following parameter:

  - **expired**: A Boolean value that indicates whether the system is terminating a previous invocation of the `completionHandler` block.

  This parameter is [true](https://developer.apple.com/documentation/swift/true) when the system prematurely terminates a `completionHandler` block that was previously invoked and had not otherwise expired.

  > **Important**

  >  If the system calls your block with an `expired` value of [true](https://developer.apple.com/documentation/swift/true), you must immediately suspend your app extension. If you fail to do this, the system terminates your extension’s process.
  >
  > When your app extension exits, all concurrent requests being handled by the extension, serving the same or other host apps, are terminated.

<a id="Discussion"></a>

## Discussion

Calling this method eventually dismisses the app extension’s view controller.

## See Also

### Handling requests

- [cancelRequest(withError:)](cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.
- [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md): The extension items and errors key.

# completeRequestReturningItems:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the host app to complete the app extension request with an array of result items.

## Declaration

```objectivec
- (void) completeRequestReturningItems:(NSArray *) items completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `items`: An array of result items, each an [NSExtensionItem](../nsextensionitem.md) object, to return to the host app.
- `completionHandler`: An optional block to be called when the request completes, performed as a background priority task.

  The block takes the following parameter:

  - **expired**: A Boolean value that indicates whether the system is terminating a previous invocation of the `completionHandler` block.

  This parameter is [true](https://developer.apple.com/documentation/swift/true) when the system prematurely terminates a `completionHandler` block that was previously invoked and had not otherwise expired.

  > **Important**

  >  If the system calls your block with an `expired` value of [true](https://developer.apple.com/documentation/swift/true), you must immediately suspend your app extension. If you fail to do this, the system terminates your extension’s process.
  >
  > When your app extension exits, all concurrent requests being handled by the extension, serving the same or other host apps, are terminated.

<a id="Discussion"></a>

## Discussion

Calling this method eventually dismisses the app extension’s view controller.

## See Also

### Handling requests

- [cancelRequestWithError:](cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.
- [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md): The extension items and errors key.
