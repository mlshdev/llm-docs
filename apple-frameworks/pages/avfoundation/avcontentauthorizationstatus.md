> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentauthorizationstatus](https://developer.apple.com/documentation/avfoundation/avcontentauthorizationstatus)

# AVContentAuthorizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

A value representing the status of a content authorization request.

## Declaration

```swift
enum AVContentAuthorizationStatus
```

<a id="overview"></a>

## Overview

Even if authorization is completed by the user, there is no guarantee that the content will then be authorized. You should re-check whether the content is authorized before proceeding.

## Topics

### Content authorization statuses

- [AVContentAuthorizationStatus.unknown](avcontentauthorizationstatus/unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationStatus.completed](avcontentauthorizationstatus/completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationStatus.cancelled](avcontentauthorizationstatus/cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationStatus.timedOut](avcontentauthorizationstatus/timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationStatus.busy](avcontentauthorizationstatus/busy.md): The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.
- [AVContentAuthorizationStatus.notAvailable](avcontentauthorizationstatus/notavailable.md): The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.
- [AVContentAuthorizationStatus.notPossible](avcontentauthorizationstatus/notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.

### Initializers

- [init(rawValue:)](avcontentauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing playback authorization in macOS

- [isContentAuthorizedForPlayback](avplayeritem/iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [isAuthorizationRequiredForPlayback](avplayeritem/isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [isApplicationAuthorizedForPlayback](avplayeritem/isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronously(withTimeoutInterval:completionHandler:)](avplayeritem/requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](avplayeritem/contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [cancelContentAuthorizationRequest()](avplayeritem/cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.

# AVContentAuthorizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

A value representing the status of a content authorization request.

## Declaration

```objectivec
enum AVContentAuthorizationStatus : NSInteger;
```

<a id="overview"></a>

## Overview

Even if authorization is completed by the user, there is no guarantee that the content will then be authorized. You should re-check whether the content is authorized before proceeding.

## Topics

### Content authorization statuses

- [AVContentAuthorizationUnknown](avcontentauthorizationstatus/unknown.md): The content authorization content request hasn’t completed.
- [AVContentAuthorizationCompleted](avcontentauthorizationstatus/completed.md): The last completed call to request content authorization completed.
- [AVContentAuthorizationCancelled](avcontentauthorizationstatus/cancelled.md): The last call to request content authorization was cancelled by the user.
- [AVContentAuthorizationTimedOut](avcontentauthorizationstatus/timedout.md): The last call to request content authorization was cancelled because the timeout interval was reached.
- [AVContentAuthorizationBusy](avcontentauthorizationstatus/busy.md): The last call to request content authorization couldn’t be completed because another asset is currently attempting authorization.
- [AVContentAuthorizationNotAvailable](avcontentauthorizationstatus/notavailable.md): The last call to request content authorization couldn’t be completed because there was no known mechanism by which to attempt authorization.
- [AVContentAuthorizationNotPossible](avcontentauthorizationstatus/notpossible.md): The last call to request content authorization couldn’t be completed in a non-recoverable way.

## See Also

### Managing playback authorization in macOS

- [contentAuthorizedForPlayback](avplayeritem/iscontentauthorizedforplayback.md): A Boolean value that indicates whether the content has been authorized by the user.
- [authorizationRequiredForPlayback](avplayeritem/isauthorizationrequiredforplayback.md): A Boolean value that indicates whether authorization is required to play the content.
- [applicationAuthorizedForPlayback](avplayeritem/isapplicationauthorizedforplayback.md): A Boolean value that indicates whether the application can be used to play the content.
- [requestContentAuthorizationAsynchronouslyWithTimeoutInterval:completionHandler:](avplayeritem/requestcontentauthorizationasynchronously%28withtimeoutinterval_completionhandler_%29.md): Presents the user the opportunity to authorize the content for playback.
- [contentAuthorizationRequestStatus](avplayeritem/contentauthorizationrequeststatus.md): The status of the most recent content authorization request.
- [cancelContentAuthorizationRequest](avplayeritem/cancelcontentauthorizationrequest%28%29.md): Cancels the currently outstanding content authorization request.
