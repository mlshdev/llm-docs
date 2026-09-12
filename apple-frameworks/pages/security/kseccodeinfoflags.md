> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoflags](https://developer.apple.com/documentation/security/kseccodeinfoflags)

# kSecCodeInfoFlags (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value indicates the static (on-disk) state of the object.

## Declaration

```swift
let kSecCodeInfoFlags: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md). See [SecCodeSignatureFlags](seccodesignatureflags.md) for a list of possible values.

# kSecCodeInfoFlags (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value indicates the static (on-disk) state of the object.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoFlags;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md). See [SecCodeSignatureFlags](seccodesignatureflags.md) for a list of possible values.
