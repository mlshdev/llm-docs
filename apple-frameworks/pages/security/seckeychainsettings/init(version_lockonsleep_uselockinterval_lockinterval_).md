> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsettings/init(version:lockonsleep:uselockinterval:lockinterval:)](https://developer.apple.com/documentation/security/seckeychainsettings/init(version:lockonsleep:uselockinterval:lockinterval:))

# init(version:lockOnSleep:useLockInterval:lockInterval:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a keychain settings structures with the given values.

## Declaration

```swift
init(version: UInt32, lockOnSleep: DarwinBoolean, useLockInterval: DarwinBoolean, lockInterval: UInt32)
```

## Parameters

- `version`: The keychain version. Use [SEC_KEYCHAIN_SETTINGS_VERS1](../sec_keychain_settings_vers1.md).
- `lockOnSleep`: A Boolean indicating whether the keychain locks when the system enters sleep mode.
- `useLockInterval`: A Boolean indicating whether the keychain locks after an time period elapses, as given by [lockInterval](lockinterval.md).
- `lockInterval`: The number of seconds after which the keychain should lock if [useLockInterval](uselockinterval.md) is [true](https://developer.apple.com/documentation/swift/true).
