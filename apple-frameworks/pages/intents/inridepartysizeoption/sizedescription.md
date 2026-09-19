> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridepartysizeoption/sizedescription

# sizeDescription (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The user-visible description of the party size.

## Declaration

```swift
var sizeDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

When presenting party size options to the user, SiriKit displays this string.

## See Also

### Getting the Party Size Information

- [partySizeRange](partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [priceRange](pricerange.md): The pricing information for parties of the specified size.

# sizeDescription (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The user-visible description of the party size.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * sizeDescription;
```

```objectivec
@property (atomic, readonly) NSString * sizeDescription;
```

<a id="Discussion"></a>

## Discussion

When presenting party size options to the user, SiriKit displays this string.

## See Also

### Getting the Party Size Information

- [partySizeRange](partysizerange.md): The number of people in the party, specified as a minimum and maximum value.
- [priceRange](pricerange.md): The pricing information for parties of the specified size.
