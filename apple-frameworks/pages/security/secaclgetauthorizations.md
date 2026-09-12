> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclgetauthorizations](https://developer.apple.com/documentation/security/secaclgetauthorizations)

# SecACLGetAuthorizations

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the CSSM authorization tags of a given access control list entry.

> Use [SecACLCopyAuthorizations](secaclcopyauthorizations%28__%29.md) instead.

## Declaration

```objectivec
OSStatus SecACLGetAuthorizations(SecACLRef acl, CSSM_ACL_AUTHORIZATION_TAG *tags, uint32 *tagCount);
```

## Parameters

- `acl`: An ACL object that identifies the access control list entry from which you wish to retrieve the authorization tags.
- `tags`: A pointer to an array of CSSM authorization tags. You must allocate this array before calling the function. On return, this array contains the authorization tags of the specified ACL entry.
- `tagCount`: On entry, points to the number of elements in the array you passed in the `tags` parameter. On return, points to the number of tags actually returned or, in the case of an overflow, the number of tags required.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecACLCopyAuthorizations](secaclcopyauthorizations%28__%29.md) instead.

An ACL object includes a list of trusted applications (see [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md)), the name of the keychain item as it appears in user prompts, the prompt selector flag, and a list of one or more operations to which this ACL object applies. Use this function to retrieve the list of operations for an ACL object. Use the [SecACLCopySimpleContents](secaclcopysimplecontents.md) function to retrieve the other information.

The `SecACLGetAuthorizations` function returns an error if there are more tags to return than the number of elements you allocated in the `tags` array. A 20-element array should suffice for most purposes; however, you can test for the `errSecBufferTooSmall` error and increase the size of the array before calling the function again if necessary. Alternatively, you can call the function with a tag count of `0`, read the value returned in the `tagCount` parameter, and then call the function again using that value.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later; use [SecACLCopyAuthorizations](secaclcopyauthorizations%28__%29.md) instead.
