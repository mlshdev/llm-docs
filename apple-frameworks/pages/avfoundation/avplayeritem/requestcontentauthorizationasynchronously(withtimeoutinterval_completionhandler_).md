> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/requestcontentauthorizationasynchronously(withtimeoutinterval:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/requestcontentauthorizationasynchronously(withtimeoutinterval:completionhandler:))

# requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Presents the user the opportunity to authorize the content for playback.

## Declaration

```swift
func requestContentAuthorizationAsynchronously(withTimeoutInterval timeoutInterval: TimeInterval, completionHandler handler: @escaping @Sendable () -> Void)
```

```swift
func requestContentAuthorization(withTimeoutInterval timeoutInterval: TimeInterval) async
```

## Parameters

- `timeoutInterval`: The maximum amount of time in seconds to wait for the user to authorize the content before calling the handler block with a timeout result.
- `handler`: The block to be called upon completion.

<a id="Discussion"></a>

## Discussion

Calling this method will present the user with the opportunity to authorize the content (for example, by launching iTunes and prompting the user to enter their Apple ID and password).

When the user has taken action (or the timeout has elapsed), the completion handler is invoked. You determine the status of the authorization attempt by checking the value of the [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) property.

Even if the status indicates a completed authorization, the content may still not be authorized (for example, if the user authorizes an Apple ID other than that associated with the content).  You should re-check the value of [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) to verify whether the content has actually been authorized before continuing.  It is not necessary to call this method if the value of [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) is already true.

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isAuthorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest()](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Presents the user the opportunity to authorize the content for playback.

## Declaration

```objectivec
- (void) requestContentAuthorizationAsynchronouslyWithTimeoutInterval:(NSTimeInterval) timeoutInterval completionHandler:(void (^)()) handler;
```

## Parameters

- `timeoutInterval`: The maximum amount of time in seconds to wait for the user to authorize the content before calling the handler block with a timeout result.
- `handler`: The block to be called upon completion.

<a id="Discussion"></a>

## Discussion

Calling this method will present the user with the opportunity to authorize the content (for example, by launching iTunes and prompting the user to enter their Apple ID and password).

When the user has taken action (or the timeout has elapsed), the completion handler is invoked. You determine the status of the authorization attempt by checking the value of the [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) property.

Even if the status indicates a completed authorization, the content may still not be authorized (for example, if the user authorizes an Apple ID other than that associated with the content).  You should re-check the value of [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) to verify whether the content has actually been authorized before continuing.  It is not necessary to call this method if the value of [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md) is already true.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [authorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
