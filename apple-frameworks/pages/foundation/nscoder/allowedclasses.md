> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/allowedclasses](https://developer.apple.com/documentation/foundation/nscoder/allowedclasses)

# allowedClasses (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of coded classes allowed for secure coding.

## Declaration

```swift
var allowedClasses: Set<AnyHashable>? { get }
```

<a id="Discussion"></a>

## Discussion

Secure coders check this set of allowed classes before decoding objects, and all objects must implement the [NSSecureCoding](../nssecurecoding.md) protocol.

## See Also

### Secure Coding

- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.

# allowedClasses (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The set of coded classes allowed for secure coding.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSSet<Class> * allowedClasses;
```

<a id="Discussion"></a>

## Discussion

Secure coders check this set of allowed classes before decoding objects, and all objects must implement the [NSSecureCoding](../nssecurecoding.md) protocol.

## See Also

### Secure Coding

- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
