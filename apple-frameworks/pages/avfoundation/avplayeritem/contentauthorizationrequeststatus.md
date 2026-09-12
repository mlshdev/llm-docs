> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/contentauthorizationrequeststatus](https://developer.apple.com/documentation/avfoundation/avplayeritem/contentauthorizationrequeststatus)

# contentAuthorizationRequestStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The status of the most recent content authorization request.

## Declaration

```swift
var contentAuthorizationRequestStatus: AVContentAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

This property reports the authorization status as determined by the most recent call to [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md).

The value will be [AVContentAuthorizationStatus.unknown](../avcontentauthorizationstatus/unknown.md) before the first call and between the time a request call is made and just prior to the completion handler being executed (thus it is safe to query this property from the completion handler).

This value is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isAuthorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest()](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# contentAuthorizationRequestStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The status of the most recent content authorization request.

## Declaration

```objectivec
@property (nonatomic, readonly) AVContentAuthorizationStatus contentAuthorizationRequestStatus;
```

<a id="Discussion"></a>

## Discussion

This property reports the authorization status as determined by the most recent call to [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md).

The value will be [AVContentAuthorizationUnknown](../avcontentauthorizationstatus/unknown.md) before the first call and between the time a request call is made and just prior to the completion handler being executed (thus it is safe to query this property from the completion handler).

This value is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [authorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
