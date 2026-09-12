> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainitemdelete(_:)](https://developer.apple.com/documentation/security/seckeychainitemdelete(_:))

# SecKeychainItemDelete(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Deletes a keychain item from the default keychain’s permanent data store.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainItemDelete(_ itemRef: SecKeychainItem) -> OSStatus
```

## Parameters

- `itemRef`: A keychain item object of the item to delete. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the keychain item has not previously been added to the keychain, this function does nothing and returns `noErr`.

Do not delete a keychain item and recreate it in order to modify it; instead, use the [SecKeychainItemModifyContent(\_:\_:\_:\_:)](seckeychainitemmodifycontent%28________%29.md) or [SecKeychainItemModifyAttributesAndData(\_:\_:\_:\_:)](seckeychainitemmodifyattributesanddata%28________%29.md) function to modify an existing keychain item. When you delete a keychain item, you lose any access controls and trust settings added by the user or by other applications.

# SecKeychainItemDelete (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Deletes a keychain item from the default keychain’s permanent data store.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainItemDelete(SecKeychainItemRef itemRef);
```

## Parameters

- `itemRef`: A keychain item object of the item to delete. You must call the `CFRelease` function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If the keychain item has not previously been added to the keychain, this function does nothing and returns `noErr`.

Do not delete a keychain item and recreate it in order to modify it; instead, use the [SecKeychainItemModifyContent](seckeychainitemmodifycontent%28________%29.md) or [SecKeychainItemModifyAttributesAndData](seckeychainitemmodifyattributesanddata%28________%29.md) function to modify an existing keychain item. When you delete a keychain item, you lose any access controls and trust settings added by the user or by other applications.
