> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/lsrequestedinfo/1447145-requestbasicflagsonly

# requestBasicFlagsOnly

**Framework:** Core Services  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

Requests all item-information flags that are not application-specific: that is, all except `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.

## Declaration

```swift
static var requestBasicFlagsOnly: LSRequestedInfo { get }
```
