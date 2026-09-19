> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaincallbackinfo/init(version:item:keychain:pid:)

# init(version:item:keychain:pid:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates a new keychain callback information structure.

## Declaration

```swift
init(version: UInt32, item: Unmanaged<SecKeychainItem>, keychain: Unmanaged<SecKeychain>, pid: pid_t)
```
