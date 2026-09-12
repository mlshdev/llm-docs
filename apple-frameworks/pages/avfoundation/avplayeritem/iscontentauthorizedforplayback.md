> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/iscontentauthorizedforplayback](https://developer.apple.com/documentation/avfoundation/avplayeritem/iscontentauthorizedforplayback)

# isContentAuthorizedForPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether the content has been authorized by the user.

## Declaration

```swift
var isContentAuthorizedForPlayback: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property reports whether the user has provided the necessary credentials to the system in order for the content to be decrypted for playback.

Content authorization is independent of application authorization (see [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md)) and that both must be granted in order for an application to be allowed to play protected content.

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [isAuthorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest()](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# contentAuthorizedForPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether the content has been authorized by the user.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContentAuthorizedForPlayback) BOOL contentAuthorizedForPlayback;
```

<a id="Discussion"></a>

## Discussion

This property reports whether the user has provided the necessary credentials to the system in order for the content to be decrypted for playback.

Content authorization is independent of application authorization (see [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md)) and that both must be granted in order for an application to be allowed to play protected content.

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [authorizationRequiredForPlayback](isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
