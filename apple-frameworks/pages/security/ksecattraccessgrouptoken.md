> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattraccessgrouptoken](https://developer.apple.com/documentation/security/ksecattraccessgrouptoken)

# kSecAttrAccessGroupToken (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The access group containing items provided by external tokens.

## Declaration

```swift
let kSecAttrAccessGroupToken: CFString
```

<a id="Discussion"></a>

## Discussion

Use this access group identifier as the value for the [kSecAttrAccessGroup](ksecattraccessgroup.md) attribute in a keychain query to access external tokens such as smart cards. Access to this group is granted by default and does not require an explicit entry in your app’s [Keychain Access Groups Entitlement](../bundleresources/entitlements/keychain-access-groups.md).

# kSecAttrAccessGroupToken (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The access group containing items provided by external tokens.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessGroupToken;
```

<a id="Discussion"></a>

## Discussion

Use this access group identifier as the value for the [kSecAttrAccessGroup](ksecattraccessgroup.md) attribute in a keychain query to access external tokens such as smart cards. Access to this group is granted by default and does not require an explicit entry in your app’s [Keychain Access Groups Entitlement](../bundleresources/entitlements/keychain-access-groups.md).
