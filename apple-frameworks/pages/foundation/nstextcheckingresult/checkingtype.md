> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/checkingtype](https://developer.apple.com/documentation/foundation/nstextcheckingresult/checkingtype)

# NSTextCheckingResult.CheckingType (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify the type of checking the methods should do. They are returned by [resultType](resulttype.md).

## Declaration

```swift
struct CheckingType
```

## Topics

### Constants

- [orthography](checkingtype/orthography.md): Attempts to identify the language
- [spelling](checkingtype/spelling.md): Checks spelling.
- [grammar](checkingtype/grammar.md): Checks grammar.
- [date](checkingtype/date.md): Attempts to locate dates.
- [address](checkingtype/address.md): Attempts to locate addresses.
- [link](checkingtype/link.md): Attempts to locate URL links.
- [quote](checkingtype/quote.md): Replaces quotes with smart quotes.
- [dash](checkingtype/dash.md): Replaces dashes with em-dashes.
- [replacement](checkingtype/replacement.md): Replaces characters such as (c) with the appropriate symbol (in this case ©).
- [correction](checkingtype/correction.md): Performs autocorrection on misspelled words.
- [regularExpression](checkingtype/regularexpression.md): Matches a regular expression.
- [phoneNumber](checkingtype/phonenumber.md): Matches a phone number.
- [transitInformation](checkingtype/transitinformation.md): Matches a transit information, for example, flight information.

### Initializers

- [init(rawValue:)](checkingtype/init%28rawvalue_%29.md)

### Type Properties

- [allCustomTypes](checkingtype/allcustomtypes.md)
- [allSystemTypes](checkingtype/allsystemtypes.md)
- [allTypes](checkingtype/alltypes.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [Keys for Transit Components](../keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](../keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](addresscomponents.md) dictionary.
- [NSTextCheckingTypes](../nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [NSTextCheckingKey](../nstextcheckingkey.md)
- [Anonymous](../1476845-anonymous.md)

# NSTextCheckingType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants specify the type of checking the methods should do. They are returned by [resultType](resulttype.md).

## Declaration

```objectivec
enum NSTextCheckingType : uint64_t;
```

## Topics

### Constants

- [NSTextCheckingTypeOrthography](checkingtype/orthography.md): Attempts to identify the language
- [NSTextCheckingTypeSpelling](checkingtype/spelling.md): Checks spelling.
- [NSTextCheckingTypeGrammar](checkingtype/grammar.md): Checks grammar.
- [NSTextCheckingTypeDate](checkingtype/date.md): Attempts to locate dates.
- [NSTextCheckingTypeAddress](checkingtype/address.md): Attempts to locate addresses.
- [NSTextCheckingTypeLink](checkingtype/link.md): Attempts to locate URL links.
- [NSTextCheckingTypeQuote](checkingtype/quote.md): Replaces quotes with smart quotes.
- [NSTextCheckingTypeDash](checkingtype/dash.md): Replaces dashes with em-dashes.
- [NSTextCheckingTypeReplacement](checkingtype/replacement.md): Replaces characters such as (c) with the appropriate symbol (in this case ©).
- [NSTextCheckingTypeCorrection](checkingtype/correction.md): Performs autocorrection on misspelled words.
- [NSTextCheckingTypeRegularExpression](checkingtype/regularexpression.md): Matches a regular expression.
- [NSTextCheckingTypePhoneNumber](checkingtype/phonenumber.md): Matches a phone number.
- [NSTextCheckingTypeTransitInformation](checkingtype/transitinformation.md): Matches a transit information, for example, flight information.

## See Also

### Constants

- [Keys for Transit Components](../keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](../keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](addresscomponents.md) dictionary.
- [NSTextCheckingTypes](../nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [NSTextCheckingKey](../nstextcheckingkey.md)
- [Anonymous](../1476845-anonymous.md)
