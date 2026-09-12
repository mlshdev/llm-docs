> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2ppkconfiguration/keychainreference](https://developer.apple.com/documentation/networkextension/nevpnikev2ppkconfiguration/keychainreference)

# keychainReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A persistent reference to the key in the keychain.

## Declaration

```swift
var keychainReference: Data { get }
```

<a id="Discussion"></a>

## Discussion

The keychain item needs to have the class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md).

## See Also

### Accessing the configuration parameters

- [identifier](identifier.md): The identifier for the PPK.
- [isMandatory](ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

# keychainReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A persistent reference to the key in the keychain.

## Declaration

```objectivec
@property (copy, readonly) NSData * keychainReference;
```

<a id="Discussion"></a>

## Discussion

The keychain item needs to have the class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md).

## See Also

### Accessing the configuration parameters

- [identifier](identifier.md): The identifier for the PPK.
- [isMandatory](ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.
