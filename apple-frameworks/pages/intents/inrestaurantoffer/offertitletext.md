> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantoffer/offertitletext](https://developer.apple.com/documentation/intents/inrestaurantoffer/offertitletext)

# offerTitleText (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-readable text that summarizes the offer.

## Declaration

```swift
var offerTitleText: String { get set }
```

<a id="Discussion"></a>

## Discussion

The string you specify in this property should be brief and communicate the overall intent of the offer. Use the [offerDetailText](offerdetailtext.md) property to communicate the details of the offer.

## See Also

### Accessing the Offer Details

- [offerDetailText](offerdetailtext.md): The user-readable text containing the details of the offer.
- [offerIdentifier](offeridentifier.md): The unique identifier associated with the offer.

# offerTitleText (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-readable text that summarizes the offer.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * offerTitleText;
```

```objectivec
@property (atomic, copy) NSString * offerTitleText;
```

<a id="Discussion"></a>

## Discussion

The string you specify in this property should be brief and communicate the overall intent of the offer. Use the [offerDetailText](offerdetailtext.md) property to communicate the details of the offer.

## See Also

### Accessing the Offer Details

- [offerDetailText](offerdetailtext.md): The user-readable text containing the details of the offer.
- [offerIdentifier](offeridentifier.md): The unique identifier associated with the offer.
