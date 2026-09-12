> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintentresponse/guestdisplaypreferences](https://developer.apple.com/documentation/intents/ingetrestaurantguestintentresponse/guestdisplaypreferences)

# guestDisplayPreferences (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The options for specifying how you want guest information conveyed to the user.

## Declaration

```swift
@NSCopying var guestDisplayPreferences: INRestaurantGuestDisplayPreferences? { get set }
```

<a id="Discussion"></a>

## Discussion

After returning your response, the system uses the preferences in this property to determine how to present guest information in the resulting system interface. Specifying a value for this property is your way of controlling how to display information about the user. For example, you might use this property to specify that you always want the user’s email address shown.

Maps uses the information in this property to configure the reservation interface it displays to users. If the value of this property is `nil`, Maps uses the default values associated with the properties of the [INRestaurantGuestDisplayPreferences](../inrestaurantguestdisplaypreferences.md) class.

## See Also

### Specifying the Response Details

- [guest](guest.md): The identity of the person making the reservation.

# guestDisplayPreferences (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The options for specifying how you want guest information conveyed to the user.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantGuestDisplayPreferences * guestDisplayPreferences;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantGuestDisplayPreferences * guestDisplayPreferences;
```

<a id="Discussion"></a>

## Discussion

After returning your response, the system uses the preferences in this property to determine how to present guest information in the resulting system interface. Specifying a value for this property is your way of controlling how to display information about the user. For example, you might use this property to specify that you always want the user’s email address shown.

Maps uses the information in this property to configure the reservation interface it displays to users. If the value of this property is `nil`, Maps uses the default values associated with the properties of the [INRestaurantGuestDisplayPreferences](../inrestaurantguestdisplaypreferences.md) class.

## See Also

### Specifying the Response Details

- [guest](guest.md): The identity of the person making the reservation.
