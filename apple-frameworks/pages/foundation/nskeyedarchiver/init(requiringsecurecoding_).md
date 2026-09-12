> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/init(requiringsecurecoding:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/init(requiringsecurecoding:))

# init(requiringSecureCoding:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an archiver to encode data, and optionally disables secure coding.

## Declaration

```swift
init(requiringSecureCoding requiresSecureCoding: Bool)
```

## Parameters

- `requiresSecureCoding`: A Boolean value indicating whether all encoded objects must conform to [NSSecureCoding](../nssecurecoding.md).

<a id="Discussion"></a>

## Discussion

To prevent the possibility of encoding an object that [NSKeyedUnarchiver](../nskeyedunarchiver.md) can’t decode, set `requiresSecureCoding` to [true](https://developer.apple.com/documentation/swift/true) whenever possible. This ensures that all encoded objects conform to [NSSecureCoding](../nssecurecoding.md).

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Related Documentation

- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.

### Creating a Keyed Archiver

- [init()](init%28%29.md): Deprecated. Initializes an archiver to encode data.
- [init(forWritingWith:)](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

# initRequiringSecureCoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an archiver to encode data, and optionally disables secure coding.

## Declaration

```objectivec
- (instancetype) initRequiringSecureCoding:(BOOL) requiresSecureCoding;
```

## Parameters

- `requiresSecureCoding`: A Boolean value indicating whether all encoded objects must conform to [NSSecureCoding](../nssecurecoding.md).

<a id="Discussion"></a>

## Discussion

To prevent the possibility of encoding an object that [NSKeyedUnarchiver](../nskeyedunarchiver.md) can’t decode, set `requiresSecureCoding` to [true](https://developer.apple.com/documentation/swift/true) whenever possible. This ensures that all encoded objects conform to [NSSecureCoding](../nssecurecoding.md).

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Related Documentation

- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.

### Creating a Keyed Archiver

- [init](init%28%29.md): Deprecated. Initializes an archiver to encode data.
- [initForWritingWithMutableData:](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.
