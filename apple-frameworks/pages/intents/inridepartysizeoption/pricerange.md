> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridepartysizeoption/pricerange](https://developer.apple.com/documentation/intents/inridepartysizeoption/pricerange)

# priceRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The pricing information for parties of the specified size.

## Declaration

```swift
var priceRange: INPriceRange? { get }
```

<a id="Discussion"></a>

## Discussion

When presenting pricing information for this party size, SiriKit displays a formatted version of this value.

## See Also

### Getting the Party Size Information

- [partySizeRange](partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [sizeDescription](sizedescription.md): The user-visible description of the party size.

# priceRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The pricing information for parties of the specified size.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) INPriceRange * priceRange;
```

```objectivec
@property (atomic, readonly, nullable) INPriceRange * priceRange;
```

<a id="Discussion"></a>

## Discussion

When presenting pricing information for this party size, SiriKit displays a formatted version of this value.

## See Also

### Getting the Party Size Information

- [partySizeRange](partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [sizeDescription](sizedescription.md): The user-visible description of the party size.
