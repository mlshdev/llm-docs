> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetsearchlist(_:)](https://developer.apple.com/documentation/security/seckeychainsetsearchlist(_:))

# SecKeychainSetSearchList(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Specifies the list of keychains to use in the default keychain search list.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetSearchList(_ searchList: CFArray) -> OSStatus
```

## Parameters

- `searchList`: An array of keychain references (of type [SecKeychain](seckeychain.md)) specifying the list of keychains to use in the default keychain search list. Passing an empty array clears the search list.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The default keychain search list is used by several functions; see for example [SecKeychainSearchCreateFromAttributes](seckeychainsearchcreatefromattributes.md), [SecKeychainFindInternetPassword(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindinternetpassword%28______________________________%29.md), or [SecKeychainFindGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:)](seckeychainfindgenericpassword%28________________%29.md). To obtain the current default keychain search list, use the [SecKeychainCopySearchList(\_:)](seckeychaincopysearchlist%28__%29.md) function.

The default keychain search list is displayed as the keychain list in the Keychain Access utility. If you use [SecKeychainSetSearchList(\_:)](seckeychainsetsearchlist%28__%29.md) to change the keychain search list, the list displayed in Keychain Access changes accordingly.

# SecKeychainSetSearchList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Specifies the list of keychains to use in the default keychain search list.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetSearchList(CFArrayRef searchList);
```

## Parameters

- `searchList`: An array of keychain references (of type [SecKeychainRef](seckeychain.md)) specifying the list of keychains to use in the default keychain search list. Passing an empty array clears the search list.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The default keychain search list is used by several functions; see for example [SecKeychainSearchCreateFromAttributes](seckeychainsearchcreatefromattributes.md), [SecKeychainFindInternetPassword](seckeychainfindinternetpassword%28______________________________%29.md), or [SecKeychainFindGenericPassword](seckeychainfindgenericpassword%28________________%29.md). To obtain the current default keychain search list, use the [SecKeychainCopySearchList](seckeychaincopysearchlist%28__%29.md) function.

The default keychain search list is displayed as the keychain list in the Keychain Access utility. If you use [SecKeychainSetSearchList](seckeychainsetsearchlist%28__%29.md) to change the keychain search list, the list displayed in Keychain Access changes accordingly.
