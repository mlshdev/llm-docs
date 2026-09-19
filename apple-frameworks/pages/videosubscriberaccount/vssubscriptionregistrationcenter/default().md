> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vssubscriptionregistrationcenter/default()

# default() (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Returns the default subscription registration center object.

## Declaration

```swift
class func `default`() -> VSSubscriptionRegistrationCenter
```

<a id="return-value"></a>

## Return Value

This method returns a [VSSubscriptionRegistrationCenter](../vssubscriptionregistrationcenter.md) object that refers to the default registration center.

<a id="Discussion"></a>

## Discussion

Use the object this method returns to tell the system what content the user is able to access within your app.

# defaultSubscriptionRegistrationCenter (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Returns the default subscription registration center object.

## Declaration

```objectivec
+ (VSSubscriptionRegistrationCenter *) defaultSubscriptionRegistrationCenter;
```

<a id="return-value"></a>

## Return Value

This method returns a [VSSubscriptionRegistrationCenter](../vssubscriptionregistrationcenter.md) object that refers to the default registration center.

<a id="Discussion"></a>

## Discussion

Use the object this method returns to tell the system what content the user is able to access within your app.
