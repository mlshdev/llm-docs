> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/authorizationstatus(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/authorizationstatus(for:))

# authorizationStatus(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.

## Declaration

```swift
class func authorizationStatus(for mediaType: AVMediaType) -> AVAuthorizationStatus
```

## Parameters

- `mediaType`: A media type for which to check the authorization status. The supported media types are [video](../avmediatype/video.md) and [audio](../avmediatype/audio.md).

<a id="return-value"></a>

## Return Value

An authorization status value.

## Mentioned In

- [Requesting authorization to capture and save media](../requesting-authorization-to-capture-and-save-media.md)

<a id="Discussion"></a>

## Discussion

A user must explicitly grant your app access to record audio or video. Call this method to determine your app’s current authorization status. If it returns a value of [AVAuthorizationStatus.notDetermined](../avauthorizationstatus/notdetermined.md), call [requestAccess(for:completionHandler:)](requestaccess%28for_completionhandler_%29.md) to prompt the user for capture permission.

After the user grants permission, the system remembers their choice and doesn’t prompt them again. However, a user can change their choice at any time in the Settings app.

> **Note**

>  If a user has denied your app recording permission, or hasn’t yet responded to the permission prompt, audio recordings contain only silence and video recordings contain only black frames.

## See Also

### Authorizing device access

- [requestAccess(for:completionHandler:)](requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [AVAuthorizationStatus](../avauthorizationstatus.md): Constants that indicate the status of an app’s authorization to capture media.

# authorizationStatusForMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

Returns an authorization status that indicates whether the user grants the app permission to capture media of a particular type.

## Declaration

```objectivec
+ (AVAuthorizationStatus) authorizationStatusForMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: A media type for which to check the authorization status. The supported media types are [AVMediaTypeVideo](../avmediatype/video.md) and [AVMediaTypeAudio](../avmediatype/audio.md).

<a id="return-value"></a>

## Return Value

An authorization status value.

## Mentioned In

- [Requesting authorization to capture and save media](../requesting-authorization-to-capture-and-save-media.md)

<a id="Discussion"></a>

## Discussion

A user must explicitly grant your app access to record audio or video. Call this method to determine your app’s current authorization status. If it returns a value of [AVAuthorizationStatusNotDetermined](../avauthorizationstatus/notdetermined.md), call [requestAccessForMediaType:completionHandler:](requestaccess%28for_completionhandler_%29.md) to prompt the user for capture permission.

After the user grants permission, the system remembers their choice and doesn’t prompt them again. However, a user can change their choice at any time in the Settings app.

> **Note**

>  If a user has denied your app recording permission, or hasn’t yet responded to the permission prompt, audio recordings contain only silence and video recordings contain only black frames.

## See Also

### Authorizing device access

- [requestAccessForMediaType:completionHandler:](requestaccess%28for_completionhandler_%29.md): Requests the user’s permission to allow the app to capture media of a particular type.
- [AVAuthorizationStatus](../avauthorizationstatus.md): Constants that indicate the status of an app’s authorization to capture media.
