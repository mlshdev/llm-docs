> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/isvoipallowed()](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/isvoipallowed())

# isVoIPAllowed() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns whether voice chat is allowed to be used on the device.

> Use SharePlay instead

## Declaration

```swift
class func isVoIPAllowed() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if voice chat is available to the application.

<a id="Discussion"></a>

## Discussion

Some countries or phone carriers may restrict the availability of voice over IP services. Before retrieving the shared voice chat service object, your application should check to see whether voice chat is available.

# isVoIPAllowed (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns whether voice chat is allowed to be used on the device.

> Use SharePlay instead

## Declaration

```objectivec
+ (BOOL) isVoIPAllowed;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if voice chat is available to the application.

<a id="Discussion"></a>

## Discussion

Some countries or phone carriers may restrict the availability of voice over IP services. Before retrieving the shared voice chat service object, your application should check to see whether voice chat is available.
