> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushtype/complication](https://developer.apple.com/documentation/pushkit/pkpushtype/complication)

# complication (Swift)

**Framework:** PushKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 9.0+ (deprecated in 13.0) · watchOS 6.0+

A push type for watchOS complications.

> Complication pushes are supported directly on watchOS now, so this should no longer be used on iOS.

## Declaration

```swift
static let complication: PKPushType
```

<a id="Discussion"></a>

## Discussion

Use this type of notification to deliver updated data related for your watchOS app’s complication. The watchOS app’s complication must be active on the user’s current clock face. If it is not, the system does not deliver pushes of this type. For watchOS 6 and later, send the push notification directly to Apple Watch. For watchOS 5 and earlier, you must send it to the iOS companion instead.

The time your watchOS app spends processing these push notifications counts against the budget allotted to your complication for updating itself. Don’t start any long-running tasks when processing the notification payload. In fact, it is recommended that you include all needed data in the payload so that your app can process that data quickly.

The system limits you to 50 push notifications per day. If you exceed the limit, subsequent pushes are not delivered.

## See Also

### Notification Types

- [fileProvider](fileprovider.md): A push type for file provider updates.
- [voIP](voip.md): A push type for Voice-over-IP (VoIP) call invitations.

# PKPushTypeComplication (Objective-C)

**Framework:** PushKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 9.0+ (deprecated in 13.0) · watchOS 6.0+

A push type for watchOS complications.

> Complication pushes are supported directly on watchOS now, so this should no longer be used on iOS.

## Declaration

```objectivec
extern PKPushType const PKPushTypeComplication;
```

<a id="Discussion"></a>

## Discussion

Use this type of notification to deliver updated data related for your watchOS app’s complication. The watchOS app’s complication must be active on the user’s current clock face. If it is not, the system does not deliver pushes of this type. For watchOS 6 and later, send the push notification directly to Apple Watch. For watchOS 5 and earlier, you must send it to the iOS companion instead.

The time your watchOS app spends processing these push notifications counts against the budget allotted to your complication for updating itself. Don’t start any long-running tasks when processing the notification payload. In fact, it is recommended that you include all needed data in the payload so that your app can process that data quickly.

The system limits you to 50 push notifications per day. If you exceed the limit, subsequent pushes are not delivered.

## See Also

### Notification Types

- [PKPushTypeFileProvider](fileprovider.md): A push type for file provider updates.
- [PKPushTypeVoIP](voip.md): A push type for Voice-over-IP (VoIP) call invitations.
