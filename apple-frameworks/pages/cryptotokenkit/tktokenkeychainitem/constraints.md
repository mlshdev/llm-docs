> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainitem/constraints

# constraints (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.

## Declaration

```swift
var constraints: [NSNumber : Any]? { get set }
```

## See Also

### Accessing Keychain Item Attributes

- [objectID](objectid.md): Returns the object ID used for keychain item identification.
- [label](label.md): The user-visible label for the keychain item.

# constraints (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSNumber *,id> * constraints;
```

## See Also

### Accessing Keychain Item Attributes

- [objectID](objectid.md): Returns the object ID used for keychain item identification.
- [label](label.md): The user-visible label for the keychain item.
