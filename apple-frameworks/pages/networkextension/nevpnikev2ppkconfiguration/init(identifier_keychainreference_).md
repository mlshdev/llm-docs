> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2ppkconfiguration/init(identifier:keychainreference:)](https://developer.apple.com/documentation/networkextension/nevpnikev2ppkconfiguration/init(identifier:keychainreference:))

# init(identifier:keychainReference:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Initializes a quantum-secure pre-shared key (PPK) configuration.

## Declaration

```swift
init(identifier: String, keychainReference: Data)
```

## Parameters

- `identifier`: The identifier for the PPK.
- `keychainReference`: A persistent reference to a keychain item with the class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md) that contains the PPK.

# initWithIdentifier:keychainReference: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Initializes a quantum-secure pre-shared key (PPK) configuration.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier keychainReference:(NSData *) keychainReference;
```

## Parameters

- `identifier`: The identifier for the PPK.
- `keychainReference`: A persistent reference to a keychain item with the class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md) that contains the PPK.
