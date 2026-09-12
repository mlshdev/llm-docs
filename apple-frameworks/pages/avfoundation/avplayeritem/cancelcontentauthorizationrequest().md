> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/cancelcontentauthorizationrequest()](https://developer.apple.com/documentation/avfoundation/avplayeritem/cancelcontentauthorizationrequest())

# cancelContentAuthorizationRequest() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Cancels the currently outstanding content authorization request.

## Declaration

```swift
func cancelContentAuthorizationRequest()
```

<a id="Discussion"></a>

## Discussion

Calling this method while a content authorization request is pending will cause that request to be cancelled and its completion handler to be invoked with a status of [AVContentAuthorizationStatus.cancelled](../avcontentauthorizationstatus/cancelled.md).

This method does not block.

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isAuthorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.

# cancelContentAuthorizationRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Cancels the currently outstanding content authorization request.

## Declaration

```objectivec
- (void) cancelContentAuthorizationRequest;
```

<a id="Discussion"></a>

## Discussion

Calling this method while a content authorization request is pending will cause that request to be cancelled and its completion handler to be invoked with a status of [AVContentAuthorizationCancelled](../avcontentauthorizationstatus/cancelled.md).

This method does not block.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [authorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
