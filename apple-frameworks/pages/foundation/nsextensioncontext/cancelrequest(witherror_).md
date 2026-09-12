> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/cancelrequest(witherror:)](https://developer.apple.com/documentation/foundation/nsextensioncontext/cancelrequest(witherror:))

# cancelRequest(withError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the host app to cancel the app extension request, with a supplied error.

## Declaration

```swift
func cancelRequest(withError error: any Error)
```

## Parameters

- `error`: The error object to return. It must be non-`nil`.

<a id="Discussion"></a>

## Discussion

On return, the `userInfo` dictionary of the [NSError](../nserror.md) object contains a key named [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md) which has as its value a dictionary of [NSExtensionItem](../nsextensionitem.md) objects and associated [NSError](../nserror.md) instances.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Handling requests

- [completeRequest(returningItems:completionHandler:)](completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md): The extension items and errors key.

# cancelRequestWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the host app to cancel the app extension request, with a supplied error.

## Declaration

```objectivec
- (void) cancelRequestWithError:(NSError *) error;
```

## Parameters

- `error`: The error object to return. It must be non-`nil`.

<a id="Discussion"></a>

## Discussion

On return, the `userInfo` dictionary of the [NSError](../nserror.md) object contains a key named [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md) which has as its value a dictionary of [NSExtensionItem](../nsextensionitem.md) objects and associated [NSError](../nserror.md) instances.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Handling requests

- [completeRequestReturningItems:completionHandler:](completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [NSExtensionItemsAndErrorsKey](../nsextensionitemsanderrorskey.md): The extension items and errors key.
