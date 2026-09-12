> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingtypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes)

# NSTextCheckingTypes (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.

## Declaration

```swift
typealias NSTextCheckingTypes = UInt64
```

## Topics

### Constants

- [NSTextCheckingAllSystemTypes](nstextcheckingallsystemtypes.md): Checking types supported by the system. The first 32 types are reserved.
- [NSTextCheckingAllCustomTypes](nstextcheckingallcustomtypes.md): Checking types that can be used by clients.
- [NSTextCheckingAllTypes](nstextcheckingalltypes.md): All possible checking types, both system- and user-supported.

## See Also

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingResult.CheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingKey](nstextcheckingkey.md)
- [Anonymous](1476845-anonymous.md)

# NSTextCheckingTypes (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the types of checking that are available. These values can be combined using the C-bitwise OR operator. The system supports its own internal types, and the user can extend those types by subclassing `NSTextCheckingResult` and adding their own custom types.

## Declaration

```objectivec
typedef uint64_t NSTextCheckingTypes;
```

## Topics

### Constants

- [NSTextCheckingAllSystemTypes](nstextcheckingallsystemtypes.md): Checking types supported by the system. The first 32 types are reserved.
- [NSTextCheckingAllCustomTypes](nstextcheckingallcustomtypes.md): Checking types that can be used by clients.
- [NSTextCheckingAllTypes](nstextcheckingalltypes.md): All possible checking types, both system- and user-supported.

## See Also

### Constants

- [Keys for Transit Components](keys-for-transit-components.md): The following constants identify the possible keys returned in the components dictionary.
- [Keys for Address Components](keys-for-address-components.md): The following constants identify the possible keys returned in the [addressComponents](nstextcheckingresult/addresscomponents.md) dictionary.
- [NSTextCheckingType](nstextcheckingresult/checkingtype.md): These constants specify the type of checking the methods should do. They are returned by [resultType](nstextcheckingresult/resulttype.md).
- [NSTextCheckingKey](nstextcheckingkey.md)
- [Anonymous](1476845-anonymous.md)
