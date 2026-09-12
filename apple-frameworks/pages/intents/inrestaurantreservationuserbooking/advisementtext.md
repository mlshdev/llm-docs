> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/advisementtext](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/advisementtext)

# advisementText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user-readable string containing policies and information related to the reservation.

## Declaration

```swift
var advisementText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to store restaurant policies, parking instructions, or special information related to the reservation. The system displays the information in this string to the user along with the reservation details.

## See Also

### Accessing Special Offers

- [selectedOffer](selectedoffer.md): The offer selected by the user.

# advisementText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user-readable string containing policies and information related to the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * advisementText;
```

```objectivec
@property (atomic, copy, nullable) NSString * advisementText;
```

<a id="Discussion"></a>

## Discussion

Use this property to store restaurant policies, parking instructions, or special information related to the reservation. The system displays the information in this string to the user along with the reservation details.

## See Also

### Accessing Special Offers

- [selectedOffer](selectedoffer.md): The offer selected by the user.
