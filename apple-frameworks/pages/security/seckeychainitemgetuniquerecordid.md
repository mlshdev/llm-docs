> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemgetuniquerecordid](https://developer.apple.com/documentation/security/seckeychainitemgetuniquerecordid)

# SecKeychainItemGetUniqueRecordID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns a CSSM unique record for the given keychain item object.

> The common security services manager module is no longer used.

## Declaration

```objectivec
OSStatus SecKeychainItemGetUniqueRecordID(SecKeychainItemRef itemRef, const CSSM_DB_UNIQUE_RECORD **uniqueRecordID);
```

## Parameters

- `itemRef`: A keychain item object.
- `uniqueRecordID`: On return, a pointer to a CSSM unique record for the given item. The unique record is valid until the item object is released.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. The common security services manager module is no longer used.
