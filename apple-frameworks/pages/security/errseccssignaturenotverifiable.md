> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccssignaturenotverifiable](https://developer.apple.com/documentation/security/errseccssignaturenotverifiable)

# errSecCSSignatureNotVerifiable (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Signature cannot be read.

## Declaration

```swift
var errSecCSSignatureNotVerifiable: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This error might be due to a filesystem that maps root to an unprivileged user, for example.

# errSecCSSignatureNotVerifiable (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Signature cannot be read.

## Declaration

```objectivec
errSecCSSignatureNotVerifiable
```

<a id="Discussion"></a>

## Discussion

This error might be due to a filesystem that maps root to an unprivileged user, for example.
