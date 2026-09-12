> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/requesttrackingauthorization(completionhandler:)](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/requesttrackingauthorization(completionhandler:))

# requestTrackingAuthorization(completionHandler:) (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The request for user authorization to access app-related data.

## Declaration

```swift
class func requestTrackingAuthorization(completionHandler completion: @escaping @Sendable (ATTrackingManager.AuthorizationStatus) -> Void)
```

```swift
class func requestTrackingAuthorization() async -> ATTrackingManager.AuthorizationStatus
```

<a id="discussion"></a>

## Discussion

The [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md) is a one-time request to authorize or deny access to app-related data that can be used for tracking the user or the device. The system remembers the user’s choice and doesn’t prompt again unless a user uninstalls and then reinstalls the app on the device.

Calls to the API only prompt when the application state is `UIApplicationStateActive`. The authorization prompt doesn’t display if another permission request is pending user confirmation. Concurrent requests aren’t preserved by iOS, and calls to the API through an app extension don’t prompt. Check the [trackingAuthorizationStatus](trackingauthorizationstatus.md) for a status of [ATTrackingManager.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md) to determine if you need to make an additional call.

The completion handler will be called with the result of the user’s decision for granting or denying permission to use application tracking. The completion handler will be called immediately if access to request authorization is restricted.

> **Important**

> To use [requestTrackingAuthorization(completionHandler:)](requesttrackingauthorization%28completionhandler_%29.md), the [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md) key must be in the [Information Property List](../../bundleresources/information-property-list.md).

# requestTrackingAuthorizationWithCompletionHandler: (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The request for user authorization to access app-related data.

## Declaration

```objectivec
+ (void) requestTrackingAuthorizationWithCompletionHandler:(void (^)(ATTrackingManagerAuthorizationStatus status)) completion;
```

<a id="discussion"></a>

## Discussion

The [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md) is a one-time request to authorize or deny access to app-related data that can be used for tracking the user or the device. The system remembers the user’s choice and doesn’t prompt again unless a user uninstalls and then reinstalls the app on the device.

Calls to the API only prompt when the application state is `UIApplicationStateActive`. The authorization prompt doesn’t display if another permission request is pending user confirmation. Concurrent requests aren’t preserved by iOS, and calls to the API through an app extension don’t prompt. Check the [trackingAuthorizationStatus](trackingauthorizationstatus.md) for a status of [ATTrackingManagerAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md) to determine if you need to make an additional call.

The completion handler will be called with the result of the user’s decision for granting or denying permission to use application tracking. The completion handler will be called immediately if access to request authorization is restricted.

> **Important**

> To use [requestTrackingAuthorizationWithCompletionHandler:](requesttrackingauthorization%28completionhandler_%29.md), the [NSUserTrackingUsageDescription](../../bundleresources/information-property-list/nsusertrackingusagedescription.md) key must be in the [Information Property List](../../bundleresources/information-property-list.md).
