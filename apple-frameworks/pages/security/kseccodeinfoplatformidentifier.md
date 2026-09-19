> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccodeinfoplatformidentifier

# kSecCodeInfoPlatformIdentifier (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value identifies the operating system release with which the code is associated, if any.

## Declaration

```swift
let kSecCodeInfoPlatformIdentifier: CFString
```

<a id="Discussion"></a>

## Discussion

If this code was signed as part of an operating system release, the value identifies that release.

# kSecCodeInfoPlatformIdentifier (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value identifies the operating system release with which the code is associated, if any.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoPlatformIdentifier;
```

<a id="Discussion"></a>

## Discussion

If this code was signed as part of an operating system release, the value identifies that release.
