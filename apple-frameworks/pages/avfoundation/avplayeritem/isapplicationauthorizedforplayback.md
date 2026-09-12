> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isapplicationauthorizedforplayback](https://developer.apple.com/documentation/avfoundation/avplayeritem/isapplicationauthorizedforplayback)

# isApplicationAuthorizedForPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether the application can be used to play the content.

## Declaration

```swift
var isApplicationAuthorizedForPlayback: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property reports whether or not the calling application is authorized to play the content associated with the item.

Application authorization is independent of content authorization (see [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md)) and that both must be granted in order for an application to be allowed to play protected content. Also, unlike content authorization, application authorization is not dependent on user credentials (that is, if `applicationAuthorizedForPlayback` is [false](https://developer.apple.com/documentation/swift/false), there are no means to obtain authorization).

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isAuthorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest()](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# applicationAuthorizedForPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether the application can be used to play the content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isApplicationAuthorizedForPlayback) BOOL applicationAuthorizedForPlayback;
```

<a id="Discussion"></a>

## Discussion

This property reports whether or not the calling application is authorized to play the content associated with the item.

Application authorization is independent of content authorization (see [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md)) and that both must be granted in order for an application to be allowed to play protected content. Also, unlike content authorization, application authorization is not dependent on user credentials (that is, if `applicationAuthorizedForPlayback` is [false](https://developer.apple.com/documentation/swift/false), there are no means to obtain authorization).

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [authorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
