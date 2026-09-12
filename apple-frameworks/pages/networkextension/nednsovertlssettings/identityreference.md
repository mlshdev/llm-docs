> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsovertlssettings/identityreference](https://developer.apple.com/documentation/networkextension/nednsovertlssettings/identityreference)

# identityReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

## Declaration

```swift
var identityReference: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the [kSecClassIdentity](../../security/ksecclassidentity.md) class.

# identityReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the certificate and private key components of the DNS client credential.

## Declaration

```objectivec
@property (copy, nullable) NSData * identityReference;
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the [kSecClassIdentity](../../security/ksecclassidentity.md) class.
