> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/useractivityforbookinginapplication](https://developer.apple.com/documentation/intents/inrideoption/useractivityforbookinginapplication)

# userActivityForBookingInApplication (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A user activity object that you can use to launch the app.

## Declaration

```swift
var userActivityForBookingInApplication: NSUserActivity? { get set }
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Set the value of this property to `nil` when you want to allow SiriKit to complete the booking of rides in its interface. When the value of this property is `nil`, Siri and Maps display ride option information directly from their respective interfaces.

Assigning a user activity object to this property causes SiriKit to launch your app so that you can complete the booking instead. You might ask SiriKit to launch your app when you want to convey additional information to the user. For example, when a pickup or drop-off location involves an airport, you might want SiriKit to launch your app so that you can ask for terminal and flight information.

The default value of this property is `nil`.

# userActivityForBookingInApplication (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A user activity object that you can use to launch the app.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSUserActivity * userActivityForBookingInApplication;
```

```objectivec
@property (atomic, strong, readwrite, nullable) NSUserActivity * userActivityForBookingInApplication;
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Set the value of this property to `nil` when you want to allow SiriKit to complete the booking of rides in its interface. When the value of this property is `nil`, Siri and Maps display ride option information directly from their respective interfaces.

Assigning a user activity object to this property causes SiriKit to launch your app so that you can complete the booking instead. You might ask SiriKit to launch your app when you want to convey additional information to the user. For example, when a pickup or drop-off location involves an airport, you might want SiriKit to launch your app so that you can ask for terminal and flight information.

The default value of this property is `nil`.
