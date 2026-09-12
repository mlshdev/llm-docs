> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscriptionregistrationcenter/setcurrentsubscription(_:)](https://developer.apple.com/documentation/videosubscriberaccount/vssubscriptionregistrationcenter/setcurrentsubscription(_:))

# setCurrentSubscription(\_:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Sets the subscription information for the current user.

## Declaration

```swift
func setCurrentSubscription(_ currentSubscription: VSSubscription?)
```

## Parameters

- `currentSubscription`: A [VSSubscription](../vssubscription.md) object that contains the subscription information to set.

<a id="Discussion"></a>

## Discussion

Your app uses this method to set a subscription when the subscriber first authenticates or when their subscription changes.

When the subscriber signs out or loses access to subscription content, your app calls this method with a value of `nil`.

Call this method as needed to update the subscription, such as when you confirm the validity of the subscription, or in response to app lifecycle events when your app becomes active. The system can use this activity as a hint that the user is actively using the subscription.

The system throws an exception if you try to set the current subscription to an unknown access level. Don’t set a subscription if the user only has access to free content.

# setCurrentSubscription: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Sets the subscription information for the current user.

## Declaration

```objectivec
- (void) setCurrentSubscription:(VSSubscription *) currentSubscription;
```

## Parameters

- `currentSubscription`: A [VSSubscription](../vssubscription.md) object that contains the subscription information to set.

<a id="Discussion"></a>

## Discussion

Your app uses this method to set a subscription when the subscriber first authenticates or when their subscription changes.

When the subscriber signs out or loses access to subscription content, your app calls this method with a value of `nil`.

Call this method as needed to update the subscription, such as when you confirm the validity of the subscription, or in response to app lifecycle events when your app becomes active. The system can use this activity as a hint that the user is actively using the subscription.

The system throws an exception if you try to set the current subscription to an unknown access level. Don’t set a subscription if the user only has access to free content.
