> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/requestpermission(for:referrerurl:presenting:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/requestpermission(for:referrerurl:presenting:completionhandler:))

# requestPermission(for:referrerURL:presenting:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```swift
func requestPermission(for url: URL, referrerURL: URL?, presenting presentingView: UIView?, completionHandler: @escaping @Sendable (BEWebContentFilter.PermissionDecision, (any Error)?) -> Void)
```

```swift
func requestPermission(for url: URL, referrerURL: URL?, presenting presentingView: UIView?) async throws -> BEWebContentFilter.PermissionDecision
```

## Parameters

- `url`: The URL to be added.
- `referrerURL`: The URL that initiated the permission request. This determines whether or not parent approval is done remotely or on-device.
- `presentingView`: The view to present permission UI from.
- `completionHandler`: The completion block to be called when the add operation is complete, with result of the operation. Result is BEWebContentFilterPermissionDecision that holds the outcome of the request for access.

<a id="discussion"></a>

## Discussion

Request a blocked URL to be added to built-in web content filter’s allowlist

# requestPermissionForURL:referrerURL:presentingView:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (void) requestPermissionForURL:(NSURL *) url referrerURL:(NSURL *) referrerURL presentingView:(UIView *) presentingView completionHandler:(void (^)(BEWebContentFilterPermissionDecision result, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL to be added.
- `referrerURL`: The URL that initiated the permission request. This determines whether or not parent approval is done remotely or on-device.
- `presentingView`: The view to present permission UI from.
- `completionHandler`: The completion block to be called when the add operation is complete, with result of the operation. Result is BEWebContentFilterPermissionDecision that holds the outcome of the request for access.

<a id="discussion"></a>

## Discussion

Request a blocked URL to be added to built-in web content filter’s allowlist
