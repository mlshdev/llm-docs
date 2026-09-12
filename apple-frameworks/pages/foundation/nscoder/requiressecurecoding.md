> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/requiressecurecoding](https://developer.apple.com/documentation/foundation/nscoder/requiressecurecoding)

# requiresSecureCoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the archiver requires all archived classes to resist object substitution attacks.

## Declaration

```swift
var requiresSecureCoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if this coder requires secure coding; [false](https://developer.apple.com/documentation/swift/false) otherwise.

Secure coders check a set of allowed classes before decoding objects, and all objects must implement the [NSSecureCoding](../nssecurecoding.md) protocol.

## See Also

### Related Documentation

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.

### Secure Coding

- [allowedClasses](allowedclasses.md): The set of coded classes allowed for secure coding.

# requiresSecureCoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the archiver requires all archived classes to resist object substitution attacks.

## Declaration

```objectivec
@property (readonly) BOOL requiresSecureCoding;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if this coder requires secure coding; [false](https://developer.apple.com/documentation/swift/false) otherwise.

Secure coders check a set of allowed classes before decoding objects, and all objects must implement the [NSSecureCoding](../nssecurecoding.md) protocol.

## See Also

### Related Documentation

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.

### Secure Coding

- [allowedClasses](allowedclasses.md): The set of coded classes allowed for secure coding.
