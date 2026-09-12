> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionitemsanderrorskey](https://developer.apple.com/documentation/foundation/nsextensionitemsanderrorskey)

# NSExtensionItemsAndErrorsKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The extension items and errors key.

## Declaration

```swift
let NSExtensionItemsAndErrorsKey: String
```

<a id="Discussion"></a>

## Discussion

This key appears in the [userInfo](nserror/userinfo.md) dictionary of the [NSError](nserror.md) object that [cancelRequest(withError:)](nsextensioncontext/cancelrequest%28witherror_%29.md) returns.

This key’s value is a dictionary of [NSExtensionItem](nsextensionitem.md) objects and associated [NSError](nserror.md) instances.

## See Also

### Handling requests

- [completeRequest(returningItems:completionHandler:)](nsextensioncontext/completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [cancelRequest(withError:)](nsextensioncontext/cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.

# NSExtensionItemsAndErrorsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The extension items and errors key.

## Declaration

```objectivec
extern NSString * const NSExtensionItemsAndErrorsKey;
```

<a id="Discussion"></a>

## Discussion

This key appears in the [userInfo](nserror/userinfo.md) dictionary of the [NSError](nserror.md) object that [cancelRequestWithError:](nsextensioncontext/cancelrequest%28witherror_%29.md) returns.

This key’s value is a dictionary of [NSExtensionItem](nsextensionitem.md) objects and associated [NSError](nserror.md) instances.

## See Also

### Handling requests

- [completeRequestReturningItems:completionHandler:](nsextensioncontext/completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [cancelRequestWithError:](nsextensioncontext/cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.
