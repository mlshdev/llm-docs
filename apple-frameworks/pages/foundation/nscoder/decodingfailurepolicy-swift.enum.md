> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodingfailurepolicy-swift.enum](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.enum)

# NSCoder.DecodingFailurePolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Policies describing the action the coder should take when encountering decode failures.

## Declaration

```swift
enum DecodingFailurePolicy
```

## Topics

### Failure Policies

- [NSCoder.DecodingFailurePolicy.raiseException](decodingfailurepolicy-swift.enum/raiseexception.md): A failure policy that directs the coder to raise an exception.
- [NSCoder.DecodingFailurePolicy.setErrorAndReturn](decodingfailurepolicy-swift.enum/seterrorandreturn.md): A failure policy that directs the coder to capture the failure as an error object.

### Initializers

- [init(rawValue:)](decodingfailurepolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.

# NSDecodingFailurePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Policies describing the action the coder should take when encountering decode failures.

## Declaration

```objectivec
enum NSDecodingFailurePolicy : NSInteger;
```

## Topics

### Failure Policies

- [NSDecodingFailurePolicyRaiseException](decodingfailurepolicy-swift.enum/raiseexception.md): A failure policy that directs the coder to raise an exception.
- [NSDecodingFailurePolicySetErrorAndReturn](decodingfailurepolicy-swift.enum/seterrorandreturn.md): A failure policy that directs the coder to capture the failure as an error object.

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
