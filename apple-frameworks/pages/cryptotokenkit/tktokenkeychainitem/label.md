> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainitem/label](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainitem/label)

# label (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user-visible label for the keychain item.

## Declaration

```swift
var label: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is equivalent to the `kSecAttrLabel` attribute type.

## See Also

### Accessing Keychain Item Attributes

- [objectID](objectid.md): Returns the object ID used for keychain item identification.
- [constraints](constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.

# label (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user-visible label for the keychain item.

## Declaration

```objectivec
@property (copy, nullable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

This property is equivalent to the `kSecAttrLabel` attribute type.

## See Also

### Accessing Keychain Item Attributes

- [objectID](objectid.md): Returns the object ID used for keychain item identification.
- [constraints](constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.
