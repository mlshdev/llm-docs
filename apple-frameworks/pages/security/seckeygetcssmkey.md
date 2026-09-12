> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygetcssmkey](https://developer.apple.com/documentation/security/seckeygetcssmkey)

# SecKeyGetCSSMKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves a pointer to the `CSSM_KEY` structure containing the key stored in a keychain item.

## Declaration

```objectivec
OSStatus SecKeyGetCSSMKey(SecKeyRef key, const CSSM_KEY **cssmKey);
```

## Parameters

- `key`: A keychain key item object.
- `cssmKey`: A pointer to a `CSSM_KEY` structure for the specified key. You should not modify or free this data, because it is owned by the system.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The `CSSM_KEY` structure is used to represent keys in CSSM and is used as an input value to several CSSM functions. The `CSSM_KEY` structure is valid until the keychain item object is released.
