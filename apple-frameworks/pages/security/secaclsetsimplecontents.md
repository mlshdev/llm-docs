> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclsetsimplecontents](https://developer.apple.com/documentation/security/secaclsetsimplecontents)

# SecACLSetSimpleContents

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the application list, description, and prompt selector for a given access control list entry.

> Use [SecACLSetContents](secaclsetcontents%28________%29.md) instead.

## Declaration

```objectivec
OSStatus SecACLSetSimpleContents(SecACLRef acl, CFArrayRef applicationList, CFStringRef description, const CSSM_ACL_KEYCHAIN_PROMPT_SELECTOR *promptSelector);
```

## Parameters

- `acl`: An ACL object that identifies the access control list entry.
- `applicationList`: An array of trusted application objects (that is, [SecTrustedApplicationRef](sectrustedapplication.md) instances) identifying applications that are allowed access to the keychain item without user confirmation. Use the [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md) function to create trusted application objects. If you set this parameter to `NULL`, then any application can use this item. If you pass an empty array, then all applications are treated as untrusted.
- `description`: The name of the keychain item that appears in the dialog box when the user is prompted for permission to use the item. Note that this name is not necessarily the same as the one displayed for the item by the Keychain Access application.
- `promptSelector`: The prompt selector flag for the given access control list entry. Set the `CSSM_ACL_KEYCHAIN_PROMPT_REQUIRE_PASSPHRASE` bit to have the user prompted for the keychain password each time a non-trusted application attempts to access this item, even if the keychain is already unlocked.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecACLSetContents](secaclsetcontents%28________%29.md) instead.

Because an ACL object is always associated with an access object, when you modify an ACL entry, you are modifying the access object as well. There is no need for a separate function to write a modified ACL object back into the access object.

Use the [SecACLGetAuthorizations](secaclgetauthorizations.md) function to get the list of operations for an ACL object.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later; use [SecACLSetContents](secaclsetcontents%28________%29.md) instead.
