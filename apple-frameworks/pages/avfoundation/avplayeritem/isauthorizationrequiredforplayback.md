> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isauthorizationrequiredforplayback](https://developer.apple.com/documentation/avfoundation/avplayeritem/isauthorizationrequiredforplayback)

# isAuthorizationRequiredForPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether authorization is required to play the content.

## Declaration

```swift
var isAuthorizationRequiredForPlayback: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property reports whether authorization is required for the item’s content to be played. If it does not require authorization, then none of the other authorization-related  methods or properties apply (though they will return sensible values where possible).

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isApplicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest()](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# authorizationRequiredForPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A Boolean value that indicates whether authorization is required to play the content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAuthorizationRequiredForPlayback) BOOL authorizationRequiredForPlayback;
```

<a id="Discussion"></a>

## Discussion

This property reports whether authorization is required for the item’s content to be played. If it does not require authorization, then none of the other authorization-related  methods or properties apply (though they will return sensible values where possible).

This property is not key-value observable.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [applicationAuthorizedForPlayback](isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [AVContentAuthorizationStatus](../avcontentauthorizationstatus.md): A value representing the status of a content authorization request.
- [cancelContentAuthorizationRequest](cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
