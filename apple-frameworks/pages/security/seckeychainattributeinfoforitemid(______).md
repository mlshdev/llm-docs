> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainattributeinfoforitemid(_:_:_:)](https://developer.apple.com/documentation/security/seckeychainattributeinfoforitemid(_:_:_:))

# SecKeychainAttributeInfoForItemID(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Obtains tags for all possible attributes of a given item class.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainAttributeInfoForItemID(_ keychain: SecKeychain?, _ itemID: UInt32, _ info: UnsafeMutablePointer<UnsafeMutablePointer<SecKeychainAttributeInfo>?>) -> OSStatus
```

## Parameters

- `keychain`: A keychain object.
- `itemID`: The relation identifier of the item tags. An `itemID` is a `CSSM_DB_RECORDTYPE` type as defined in `cssmtype.h`.
- `info`: On return, a pointer to the keychain attribute information. Your application should call the [SecKeychainFreeAttributeInfo(\_:)](seckeychainfreeattributeinfo%28__%29.md) function to release this structure when done with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This call returns more attributes than are supported by the old style Keychain API and passing them into older calls yields an invalid attribute error. The recommended call to retrieve the attribute values is the [SecKeychainItemCopyAttributesAndData(\_:\_:\_:\_:\_:\_:)](seckeychainitemcopyattributesanddata%28____________%29.md) function.

> **Note**

>  This is a CSSM-based API. CSSM is deprecated.
>
> For new development, where possible, you should generally use [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md) to obtain the attributes of keychain items instead, because that function is based on Core Foundation types.

# SecKeychainAttributeInfoForItemID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Obtains tags for all possible attributes of a given item class.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainAttributeInfoForItemID(SecKeychainRef keychain, UInt32 itemID, SecKeychainAttributeInfo **info);
```

## Parameters

- `keychain`: A keychain object.
- `itemID`: The relation identifier of the item tags. An `itemID` is a `CSSM_DB_RECORDTYPE` type as defined in `cssmtype.h`.
- `info`: On return, a pointer to the keychain attribute information. Your application should call the [SecKeychainFreeAttributeInfo](seckeychainfreeattributeinfo%28__%29.md) function to release this structure when done with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This call returns more attributes than are supported by the old style Keychain API and passing them into older calls yields an invalid attribute error. The recommended call to retrieve the attribute values is the [SecKeychainItemCopyAttributesAndData](seckeychainitemcopyattributesanddata%28____________%29.md) function.

> **Note**

>  This is a CSSM-based API. CSSM is deprecated.
>
> For new development, where possible, you should generally use [SecItemCopyMatching](secitemcopymatching%28____%29.md) to obtain the attributes of keychain items instead, because that function is based on Core Foundation types.
