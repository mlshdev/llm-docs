> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportparameters/keyusage](https://developer.apple.com/documentation/security/seckeyimportexportparameters/keyusage)

# keyUsage (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A word of bits constituting the low-level use flags for imported keys.

## Declaration

```swift
var keyUsage: CSSM_KEYUSE
```

<a id="Discussion"></a>

## Discussion

Use flags defined in `cssmtype.h`. If this field is `0` or `keyParams` is `NULL`, the default value is `CSSM_KEYUSE_ANY`.

# keyUsage (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A word of bits constituting the low-level use flags for imported keys.

## Declaration

```objectivec
CSSM_KEYUSE keyUsage;
```

<a id="Discussion"></a>

## Discussion

Use flags defined in `cssmtype.h`. If this field is `0` or `keyParams` is `NULL`, the default value is `CSSM_KEYUSE_ANY`.
