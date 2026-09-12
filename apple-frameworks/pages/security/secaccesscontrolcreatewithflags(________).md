> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreatewithflags(_:_:_:_:)](https://developer.apple.com/documentation/security/secaccesscontrolcreatewithflags(_:_:_:_:))

# SecAccessControlCreateWithFlags(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new access control object with the specified protection type and flags.

## Declaration

```swift
func SecAccessControlCreateWithFlags(_ allocator: CFAllocator?, _ protection: CFTypeRef, _ flags: SecAccessControlCreateFlags, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecAccessControl?
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new [SecAccessControl](secaccesscontrol.md) object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to allocate memory for the new allocator using the default allocator.
- `protection`: Protection class to be used for the item. Use one of the values that go with the [kSecAttrAccessible](ksecattraccessible.md) attribute key, namely those listed in [Accessibility Values](item-attribute-keys-and-values.md#Accessibility-Values).
- `flags`: Flags specifying the allowed operations for the item. See [SecAccessControlCreateFlags](secaccesscontrolcreateflags.md).
- `error`: On return, if an error occurred, the reference pointed at by this parameter refers to an error object that indicates the reason for failure. The caller is responsible for releasing the error object. Pass `NULL` for this parameter to ignore the error.

<a id="return-value"></a>

## Return Value

The newly created access control object. In Objective-C, free this item with [CFRelease](../corefoundation/cfrelease.md) when you are done with it.

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

You use the result of this function as a value for the [kSecAttrAccessControl](ksecattraccesscontrol.md) attribute in the [SecItemAdd(\_:\_:)](secitemadd%28____%29.md), [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md), or [SecKeyGeneratePair(\_:\_:\_:)](seckeygeneratepair%28______%29.md) functions.

Accessing keychain items or performing operations on keys that are protected by access control objects may block execution on the main thread. Perform these actions in the background, or use them in combination with the [kSecUseAuthenticationContext](ksecuseauthenticationcontext.md) and [kSecUseAuthenticationUI](ksecuseauthenticationui.md) attributes to manage user interactions.

# SecAccessControlCreateWithFlags (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new access control object with the specified protection type and flags.

## Declaration

```objectivec
SecAccessControlRefSecAccessControlCreateWithFlags(CFAllocatorRef allocator, CFTypeRef protection, SecAccessControlCreateFlags flags, CFErrorRef*error);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new [SecAccessControlRef](secaccesscontrol.md) object. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to allocate memory for the new allocator using the default allocator.
- `protection`: Protection class to be used for the item. Use one of the values that go with the [kSecAttrAccessible](ksecattraccessible.md) attribute key, namely those listed in [Accessibility Values](item-attribute-keys-and-values.md#Accessibility-Values).
- `flags`: Flags specifying the allowed operations for the item. See [SecAccessControlCreateFlags](secaccesscontrolcreateflags.md).
- `error`: On return, if an error occurred, the reference pointed at by this parameter refers to an error object that indicates the reason for failure. The caller is responsible for releasing the error object. Pass `NULL` for this parameter to ignore the error.

<a id="return-value"></a>

## Return Value

The newly created access control object. In Objective-C, free this item with [CFRelease](../corefoundation/cfrelease.md) when you are done with it.

## Mentioned In

- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md)
- [Restricting keychain item accessibility](restricting-keychain-item-accessibility.md)

<a id="Discussion"></a>

## Discussion

You use the result of this function as a value for the [kSecAttrAccessControl](ksecattraccesscontrol.md) attribute in the [SecItemAdd](secitemadd%28____%29.md), [SecItemUpdate](secitemupdate%28____%29.md), or [SecKeyGeneratePair](seckeygeneratepair%28______%29.md) functions.

Accessing keychain items or performing operations on keys that are protected by access control objects may block execution on the main thread. Perform these actions in the background, or use them in combination with the [kSecUseAuthenticationContext](ksecuseauthenticationcontext.md) and [kSecUseAuthenticationUI](ksecuseauthenticationui.md) attributes to manage user interactions.
