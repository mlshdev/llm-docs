> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintentresponse/guest](https://developer.apple.com/documentation/intents/ingetrestaurantguestintentresponse/guest)

# guest (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity of the person making the reservation.

## Declaration

```swift
@NSCopying var guest: INRestaurantGuest? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the identity of the person making the reservation. Depending on the preferences you specify in the [guestDisplayPreferences](guestdisplaypreferences.md) property, this person may or may not be the person associated with any newly created reservations.

## See Also

### Specifying the Response Details

- [guestDisplayPreferences](guestdisplaypreferences.md): The options for specifying how you want guest information conveyed to the user.

# guest (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity of the person making the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantGuest * guest;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantGuest * guest;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the identity of the person making the reservation. Depending on the preferences you specify in the [guestDisplayPreferences](guestdisplaypreferences.md) property, this person may or may not be the person associated with any newly created reservations.

## See Also

### Specifying the Response Details

- [guestDisplayPreferences](guestdisplaypreferences.md): The options for specifying how you want guest information conveyed to the user.
