> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportflags/importonlyone](https://developer.apple.com/documentation/security/seckeyimportexportflags/importonlyone)

# importOnlyOne (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** macOS 10.0+

A flag that you set to prevent importing more than one private key.

## Declaration

```swift
static var importOnlyOne: SecKeyImportExportFlags { get }
```

<a id="Discussion"></a>

## Discussion

Prevents the importing of more than one private key by the [SecKeychainItemImport](../seckeychainitemimport.md) function. If the `importKeychain` parameter is `NULL`, this bit is ignored. Otherwise, if this bit is set and there is more than one key in the incoming external representation, no items are imported to the specified keychain and the error `errSecMultipleKeys` is returned.

# kSecKeyImportOnlyOne (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

A flag that you set to prevent importing more than one private key.

## Declaration

```objectivec
kSecKeyImportOnlyOne
```

<a id="Discussion"></a>

## Discussion

Prevents the importing of more than one private key by the [SecKeychainItemImport](../seckeychainitemimport.md) function. If the `importKeychain` parameter is `NULL`, this bit is ignored. Otherwise, if this bit is set and there is more than one key in the incoming external representation, no items are imported to the specified keychain and the error `errSecMultipleKeys` is returned.
