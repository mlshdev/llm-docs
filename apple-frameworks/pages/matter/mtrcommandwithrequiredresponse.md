> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommandwithrequiredresponse](https://developer.apple.com/documentation/matter/mtrcommandwithrequiredresponse)

# MTRCommandWithRequiredResponse (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

An object representing a single command to be invoked and the response required for the invoke to be considered successful.

## Declaration

```swift
class MTRCommandWithRequiredResponse
```

## Topics

### Initializers

- [init(coder:)](mtrcommandwithrequiredresponse/init%28coder_%29.md)
- [init(path:commandFields:requiredResponse:)](mtrcommandwithrequiredresponse/init%28path_commandfields_requiredresponse_%29.md)

### Instance Properties

- [commandFields](mtrcommandwithrequiredresponse/commandfields.md): The command fields to pass for the command invoke. nil if this command does not have any fields. If not nil, this should be a data-value dictionary of MTRStructureValueType.
- [path](mtrcommandwithrequiredresponse/path.md): The path of the command being invoked.
- [requiredResponse](mtrcommandwithrequiredresponse/requiredresponse.md): The response that represents this command succeeding.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MTRCommandWithRequiredResponse (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

An object representing a single command to be invoked and the response required for the invoke to be considered successful.

## Declaration

```objectivec
@interface MTRCommandWithRequiredResponse : NSObject
```

## Topics

### Instance Properties

- [commandFields](mtrcommandwithrequiredresponse/commandfields.md): The command fields to pass for the command invoke. nil if this command does not have any fields. If not nil, this should be a data-value dictionary of MTRStructureValueType.
- [path](mtrcommandwithrequiredresponse/path.md): The path of the command being invoked.
- [requiredResponse](mtrcommandwithrequiredresponse/requiredresponse.md): The response that represents this command succeeding.

### Instance Methods

- [initWithPath:commandFields:requiredResponse:](mtrcommandwithrequiredresponse/init%28path_commandfields_requiredresponse_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
