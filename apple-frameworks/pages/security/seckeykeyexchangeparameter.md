> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeykeyexchangeparameter](https://developer.apple.com/documentation/security/seckeykeyexchangeparameter)

# SecKeyKeyExchangeParameter (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The dictionary keys used to specify Diffie-Hellman key exchange parameters.

## Declaration

```swift
struct SecKeyKeyExchangeParameter
```

<a id="Discussion"></a>

## Discussion

Use these constants as keys in the dictionary that you input to the [SecKeyCopyKeyExchangeResult(\_:\_:\_:\_:\_:)](seckeycopykeyexchangeresult%28__________%29.md) function as a means to refine the process of Diffie-Hellman key exchange.

## Topics

### Type Properties

- [requestedSize](seckeykeyexchangeparameter/requestedsize.md)
- [sharedInfo](seckeykeyexchangeparameter/sharedinfo.md)

### Initializers

- [init(rawValue:)](seckeykeyexchangeparameter/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecKeyKeyExchangeParameter (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The dictionary keys used to specify Diffie-Hellman key exchange parameters.

## Declaration

```objectivec
typedef CFStringRef SecKeyKeyExchangeParameter;
```

<a id="Discussion"></a>

## Discussion

Use these constants as keys in the dictionary that you input to the [SecKeyCopyKeyExchangeResult](seckeycopykeyexchangeresult%28__________%29.md) function as a means to refine the process of Diffie-Hellman key exchange.

## Topics

### Type Properties

- [kSecKeyKeyExchangeParameterRequestedSize](seckeykeyexchangeparameter/requestedsize.md)
- [kSecKeyKeyExchangeParameterSharedInfo](seckeykeyexchangeparameter/sharedinfo.md)
