> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2ppkconfiguration/ismandatory](https://developer.apple.com/documentation/networkextension/nevpnikev2ppkconfiguration/ismandatory)

# isMandatory (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

## Declaration

```swift
var isMandatory: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Accessing the configuration parameters

- [identifier](identifier.md): The identifier for the PPK.
- [keychainReference](keychainreference.md): A persistent reference to the key in the keychain.

# isMandatory (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

## Declaration

```objectivec
@property BOOL isMandatory;
```

<a id="Discussion"></a>

## Discussion

The default value is `true`.

## See Also

### Accessing the configuration parameters

- [identifier](identifier.md): The identifier for the PPK.
- [keychainReference](keychainreference.md): A persistent reference to the key in the keychain.
