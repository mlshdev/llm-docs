> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/trackingauthorizationstatus](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/trackingauthorizationstatus)

# trackingAuthorizationStatus (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The authorization status that is current for the calling application.

## Declaration

```swift
class var trackingAuthorizationStatus: ATTrackingManager.AuthorizationStatus { get }
```

<a id="return-value"></a>

## Return Value

Information about your application’s tracking authorization status. Users are able to grant or deny developers tracking privileges on a per-app basis. Application developers must call `requestTrackingAuthorizationWithCompletionHandler:` for the ability to track users.

<a id="discussion"></a>

## Discussion

If the user has not yet been prompted to approve access, the return value will either be `ATTrackingManagerAuthorizationStatusNotDetermined`, or `ATTrackingManagerAuthorizationStatusRestricted` if this value is managed. Once the user has been prompted, the return value will be either `ATTrackingManagerAuthorizationStatusDenied` or `ATTrackingManagerAuthorizationStatusAuthorized`.

Use the [trackingAuthorizationStatus](trackingauthorizationstatus.md) property to check authorization status.

## See Also

### Determining Tracking Authorization Status

- [ATTrackingManager.AuthorizationStatus](authorizationstatus.md): The status values for app tracking authorization.

# trackingAuthorizationStatus (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The authorization status that is current for the calling application.

## Declaration

```objectivec
@property (class, nonatomic, assign, readonly) ATTrackingManagerAuthorizationStatus trackingAuthorizationStatus;
```

<a id="return-value"></a>

## Return Value

Information about your application’s tracking authorization status. Users are able to grant or deny developers tracking privileges on a per-app basis. Application developers must call `requestTrackingAuthorizationWithCompletionHandler:` for the ability to track users.

<a id="discussion"></a>

## Discussion

If the user has not yet been prompted to approve access, the return value will either be `ATTrackingManagerAuthorizationStatusNotDetermined`, or `ATTrackingManagerAuthorizationStatusRestricted` if this value is managed. Once the user has been prompted, the return value will be either `ATTrackingManagerAuthorizationStatusDenied` or `ATTrackingManagerAuthorizationStatusAuthorized`.

Use the [trackingAuthorizationStatus](trackingauthorizationstatus.md) property to check authorization status.

## See Also

### Determining Tracking Authorization Status

- [ATTrackingManagerAuthorizationStatus](authorizationstatus.md): The status values for app tracking authorization.
