> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/errseccsfilehardquarantined

# errSecCSFileHardQuarantined (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

File open or execution not allowed.

## Declaration

```swift
var errSecCSFileHardQuarantined: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

File has quarantine flags indicating that it should not be opened or executed under any circumstances. This usually occurs because the file was downloaded by a sandboxed application that does not have file download entitlements.

# errSecCSFileHardQuarantined (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

File open or execution not allowed.

## Declaration

```objectivec
errSecCSFileHardQuarantined
```

<a id="Discussion"></a>

## Discussion

File has quarantine flags indicating that it should not be opened or executed under any circumstances. This usually occurs because the file was downloaded by a sandboxed application that does not have file download entitlements.
