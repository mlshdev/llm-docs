> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/completion](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/completion)

# TKSmartCardUserInteractionForPINOperation.Completion (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
struct Completion
```

## Topics

### Type Properties

- [key](completion/key.md)
- [maxLength](completion/maxlength.md)
- [timeout](completion/timeout.md)

### Initializers

- [init(rawValue:)](completion/init%28rawvalue_%29.md)

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

### Managing Pin Completion

- [pinCompletion](pincompletion.md): The conditions under which PIN entry should be considered complete.

# TKSmartCardPINCompletion (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum TKSmartCardPINCompletion : NSUInteger;
```

## Topics

### Type Properties

- [TKSmartCardPINCompletionKey](completion/key.md)
- [TKSmartCardPINCompletionMaxLength](completion/maxlength.md)
- [TKSmartCardPINCompletionTimeout](completion/timeout.md)

## See Also

### Managing Pin Completion

- [PINCompletion](pincompletion.md): The conditions under which PIN entry should be considered complete.
