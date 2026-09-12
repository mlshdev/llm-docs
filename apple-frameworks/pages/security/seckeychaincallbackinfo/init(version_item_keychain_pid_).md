> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincallbackinfo/init(version:item:keychain:pid:)](https://developer.apple.com/documentation/security/seckeychaincallbackinfo/init(version:item:keychain:pid:))

# init(version:item:keychain:pid:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates a new keychain callback information structure.

## Declaration

```swift
init(version: UInt32, item: Unmanaged<SecKeychainItem>, keychain: Unmanaged<SecKeychain>, pid: pid_t)
```
