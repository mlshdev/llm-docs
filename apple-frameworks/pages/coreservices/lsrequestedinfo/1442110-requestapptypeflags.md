> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/lsrequestedinfo/1442110-requestapptypeflags

# requestAppTypeFlags

**Framework:** Core Services  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

Requests all application-specific item-information flags: that is, `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.

## Declaration

```swift
static var requestAppTypeFlags: LSRequestedInfo { get }
```
