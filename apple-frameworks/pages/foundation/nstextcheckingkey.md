> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingkey](https://developer.apple.com/documentation/foundation/nstextcheckingkey)

# NSTextCheckingKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct NSTextCheckingKey
```

## Topics

### Initializers

- [init(\_:)](nstextcheckingkey/init%28__%29.md)
- [init(rawValue:)](nstextcheckingkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingResult.CheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingTypes](nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [Anonymous](1476845-anonymous.md)

# NSTextCheckingKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef NSString * NSTextCheckingKey;
```

## See Also

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingTypes](nstextcheckingtypes.md): Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.
- [Anonymous](1476845-anonymous.md)
