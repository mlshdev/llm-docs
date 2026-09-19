> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccsuseallarchitectures

# kSecCSUseAllArchitectures (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Flag for requesting all architectures.

## Declaration

```swift
var kSecCSUseAllArchitectures: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

When this flag is used, if code refers to a single architecture of a universal binary, return a [SecStaticCode](secstaticcode.md) object that refers to the entire universal code with all its architectures. By default, the returned static reference identifies only the actual architecture of the running program.

# kSecCSUseAllArchitectures (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Flag for requesting all architectures.

## Declaration

```objectivec
kSecCSUseAllArchitectures
```

<a id="Discussion"></a>

## Discussion

When this flag is used, if code refers to a single architecture of a universal binary, return a [SecStaticCodeRef](secstaticcode.md) object that refers to the entire universal code with all its architectures. By default, the returned static reference identifies only the actual architecture of the running program.
