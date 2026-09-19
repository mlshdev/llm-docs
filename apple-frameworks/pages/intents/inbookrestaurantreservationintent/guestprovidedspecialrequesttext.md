> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/guestprovidedspecialrequesttext

# guestProvidedSpecialRequestText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about any special requests made by the user.

## Declaration

```swift
var guestProvidedSpecialRequestText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property inclues and special requests made during booking. For example, the user might of asked for a non-smoking table or included special dietary requests when making a reservation. You should forward any special requests to the restaurant.

## See Also

### Getting Special Requests and Offers

- [selectedOffer](selectedoffer.md): The special offer, if any, selected by the user.

# guestProvidedSpecialRequestText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about any special requests made by the user.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * guestProvidedSpecialRequestText;
```

```objectivec
@property (atomic, copy, nullable) NSString * guestProvidedSpecialRequestText;
```

<a id="Discussion"></a>

## Discussion

This property inclues and special requests made during booking. For example, the user might of asked for a non-smoking table or included special dietary requests when making a reservation. You should forward any special requests to the restaurant.

## See Also

### Getting Special Requests and Offers

- [selectedOffer](selectedoffer.md): The special offer, if any, selected by the user.
