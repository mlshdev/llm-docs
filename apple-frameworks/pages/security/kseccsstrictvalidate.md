> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccsstrictvalidate](https://developer.apple.com/documentation/security/kseccsstrictvalidate)

# kSecCSStrictValidate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Perform additional checks to ensure the validity of code in bundle form.

## Declaration

```swift
var kSecCSStrictValidate: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

For code in bundle form, perform additional checks to verify that the bundle is not structured in a way that would allow tampering, and reject any resource envelope that introduces weaknesses into the signature.

# kSecCSStrictValidate (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Perform additional checks to ensure the validity of code in bundle form.

## Declaration

```objectivec
kSecCSStrictValidate
```

<a id="Discussion"></a>

## Discussion

For code in bundle form, perform additional checks to verify that the bundle is not structured in a way that would allow tampering, and reject any resource envelope that introduces weaknesses into the signature.
