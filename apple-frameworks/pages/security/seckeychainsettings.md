> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsettings](https://developer.apple.com/documentation/security/seckeychainsettings)

# SecKeychainSettings (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure that contains information about keychain settings.

## Declaration

```swift
struct SecKeychainSettings
```

<a id="overview"></a>

## Overview

This structure contains information about a keychain’s settings such as locking on sleep and the lock time interval. Use the [SecKeychainSetSettings(\_:\_:)](seckeychainsetsettings%28____%29.md) and [SecKeychainCopySettings(\_:\_:)](seckeychaincopysettings%28____%29.md) functions to set and copy a keychain’s settings.

## Topics

### Initializers

- [init()](seckeychainsettings/init%28%29.md): Initializes a keychain settings structure with default values.
- [init(version:lockOnSleep:useLockInterval:lockInterval:)](seckeychainsettings/init%28version_lockonsleep_uselockinterval_lockinterval_%29.md): Initializes a keychain settings structures with the given values.

### Instance Properties

- [lockInterval](seckeychainsettings/lockinterval.md): The number of seconds to wait before the keychain locks.
- [lockOnSleep](seckeychainsettings/lockonsleep.md): A Boolean value indicating whether the keychain locks when the system sleeps.
- [useLockInterval](seckeychainsettings/uselockinterval.md): A Boolean value indicating whether the keychain automatically locks after a certain period of time.
- [version](seckeychainsettings/version.md): The keychain version.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# SecKeychainSettings (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure that contains information about keychain settings.

## Declaration

```objectivec
struct SecKeychainSettings;
```

<a id="overview"></a>

## Overview

This structure contains information about a keychain’s settings such as locking on sleep and the lock time interval. Use the [SecKeychainSetSettings](seckeychainsetsettings%28____%29.md) and [SecKeychainCopySettings](seckeychaincopysettings%28____%29.md) functions to set and copy a keychain’s settings.

## Topics

### Instance Properties

- [lockInterval](seckeychainsettings/lockinterval.md): The number of seconds to wait before the keychain locks.
- [lockOnSleep](seckeychainsettings/lockonsleep.md): A Boolean value indicating whether the keychain locks when the system sleeps.
- [useLockInterval](seckeychainsettings/uselockinterval.md): A Boolean value indicating whether the keychain automatically locks after a certain period of time.
- [version](seckeychainsettings/version.md): The keychain version.
