> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantoffer/offeridentifier](https://developer.apple.com/documentation/intents/inrestaurantoffer/offeridentifier)

# offerIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with the offer.

## Declaration

```swift
var offerIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

For each offer, your company or the restaurant must provide a unique identifier for the offer. Use the identifier to validate the offer in your system. You can also pass the identifier to the restaurant if it has a system for validating special offers.

## See Also

### Accessing the Offer Details

- [offerTitleText](offertitletext.md): The user-readable text that summarizes the offer.
- [offerDetailText](offerdetailtext.md): The user-readable text containing the details of the offer.

# offerIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with the offer.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * offerIdentifier;
```

```objectivec
@property (atomic, copy) NSString * offerIdentifier;
```

<a id="Discussion"></a>

## Discussion

For each offer, your company or the restaurant must provide a unique identifier for the offer. Use the identifier to validate the offer in your system. You can also pass the identifier to the restaurant if it has a system for validating special offers.

## See Also

### Accessing the Offer Details

- [offerTitleText](offertitletext.md): The user-readable text that summarizes the offer.
- [offerDetailText](offerdetailtext.md): The user-readable text containing the details of the offer.
