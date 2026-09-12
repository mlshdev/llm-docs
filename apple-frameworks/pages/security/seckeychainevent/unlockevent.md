> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainevent/unlockevent](https://developer.apple.com/documentation/security/seckeychainevent/unlockevent)

# SecKeychainEvent.unlockEvent (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates a keychain was successfully unlocked.

## Declaration

```swift
case unlockEvent
```

<a id="Discussion"></a>

## Discussion

It is impossible to distinguish between an unlock event caused by an explicit request and one that occurred automatically because the keychain was needed to perform an operation. In either case, however, the `pid` parameter in the `SecKeychainCallbackInfo` structure does return the ID of the process whose actions caused the unlock event.

# kSecUnlockEvent (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates a keychain was successfully unlocked.

## Declaration

```objectivec
kSecUnlockEvent
```

<a id="Discussion"></a>

## Discussion

It is impossible to distinguish between an unlock event caused by an explicit request and one that occurred automatically because the keychain was needed to perform an operation. In either case, however, the `pid` parameter in the `SecKeychainCallbackInfo` structure does return the ID of the process whose actions caused the unlock event.
