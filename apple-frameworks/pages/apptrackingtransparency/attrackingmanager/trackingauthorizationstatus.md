> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/trackingauthorizationstatus

# trackingAuthorizationStatus (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the status of the app’s tracking authorization.

## Declaration

```swift
class var trackingAuthorizationStatus: ATTrackingManager.AuthorizationStatus { get }
```

<a id="discussion"></a>

## Discussion

Check this property to determine whether your app has permission to access app-related data it can use to track a person or device.

If the status is [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md), call one of the tracking-request methods to present the tracking-authorization prompt and ask the person for permission:

- [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md)
- [requestTrackingAuthorization(usingExpandedInterface:additionalInformationAction:completionHandler:)](requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md)

This property returns [ATTrackingManager.AuthorizationStatus.restricted](authorizationstatus/restricted.md) when the system restricts tracking for the device, regardless of whether your app has presented the prompt.

## See Also

### Authorization status and results

- [ATTrackingManager.AuthorizationStatus](authorizationstatus.md): A type that represents the tracking-authorization status of an app.

# trackingAuthorizationStatus (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the status of the app’s tracking authorization.

## Declaration

```objectivec
@property (class, nonatomic, assign, readonly) ATTrackingManagerAuthorizationStatus trackingAuthorizationStatus;
```

<a id="discussion"></a>

## Discussion

Check this property to determine whether your app has permission to access app-related data it can use to track a person or device.

If the status is [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md), call one of the tracking-request methods to present the tracking-authorization prompt and ask the person for permission:

- [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md)
- [requestTrackingAuthorizationUsingExpandedInterface:additionalInformationAction:completionHandler:](requesttrackingauthorization%28usingexpandedinterface_additionalinformationaction_completionhandler_%29.md)

This property returns [ATTrackingManagerAuthorizationStatusRestricted](authorizationstatus/restricted.md) when the system restricts tracking for the device, regardless of whether your app has presented the prompt.

## See Also

### Authorization status and results

- [ATTrackingManagerAuthorizationStatus](authorizationstatus.md): A type that represents the tracking-authorization status of an app.
