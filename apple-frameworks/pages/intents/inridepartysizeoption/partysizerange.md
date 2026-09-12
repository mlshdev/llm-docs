> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridepartysizeoption/partysizerange](https://developer.apple.com/documentation/intents/inridepartysizeoption/partysizerange)

# partySizeRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The number of people in the party, specified as a minimum and maximum value.

## Declaration

```swift
var partySizeRange: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

The `location` value of the range contains the minimum number of people. Adding the `location` and `length` values results in the maximum number of people. For example, a range value of (1, 0) represents a single person and a range value of (1, 2) represents 1 to 3 people.

## See Also

### Getting the Party Size Information

- [sizeDescription](sizedescription.md): The user-visible description of the party size.
- [priceRange](pricerange.md): The pricing information for parties of the specified size.

# partySizeRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The number of people in the party, specified as a minimum and maximum value.

## Declaration

```objectivec
@property (nonatomic, readonly) NSRange partySizeRange;
```

```objectivec
@property (atomic, readonly) NSRange partySizeRange;
```

<a id="Discussion"></a>

## Discussion

The `location` value of the range contains the minimum number of people. Adding the `location` and `length` values results in the maximum number of people. For example, a range value of (1, 0) represents a single person and a range value of (1, 2) represents 1 to 3 people.

## See Also

### Getting the Party Size Information

- [sizeDescription](sizedescription.md): The user-visible description of the party size.
- [priceRange](pricerange.md): The pricing information for parties of the specified size.
