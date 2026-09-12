> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2ppkconfiguration/identifier](https://developer.apple.com/documentation/networkextension/nevpnikev2ppkconfiguration/identifier)

# identifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The identifier for the PPK.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Accessing the configuration parameters

- [keychainReference](keychainreference.md): A persistent reference to the key in the keychain.
- [isMandatory](ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

# identifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The identifier for the PPK.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

## See Also

### Accessing the configuration parameters

- [keychainReference](keychainreference.md): A persistent reference to the key in the keychain.
- [isMandatory](ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.
