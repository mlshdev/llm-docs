> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattraccessibleafterfirstunlock

# kSecAttrAccessibleAfterFirstUnlock (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.

## Declaration

```swift
let kSecAttrAccessibleAfterFirstUnlock: CFString
```

<a id="Discussion"></a>

## Discussion

After the first unlock, the data remains accessible until the next restart.  This is recommended for items that need to be accessed by background applications. Items with this attribute migrate to a new device when using encrypted backups.

# kSecAttrAccessibleAfterFirstUnlock (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data in the keychain item cannot be accessed after a restart until the device has been unlocked once by the user.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccessibleAfterFirstUnlock;
```

<a id="Discussion"></a>

## Discussion

After the first unlock, the data remains accessible until the next restart.  This is recommended for items that need to be accessed by background applications. Items with this attribute migrate to a new device when using encrypted backups.
