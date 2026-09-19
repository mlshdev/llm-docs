> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychainevent/lockevent

# SecKeychainEvent.lockEvent (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates a keychain was locked.

## Declaration

```swift
case lockEvent
```

<a id="Discussion"></a>

## Discussion

It is impossible to distinguish between a lock event caused by an explicit request and one caused by a keychain that locked itself because of a timeout. Therefore, the `pid` parameter in the [SecKeychainCallbackInfo](../seckeychaincallbackinfo.md) structure does not contain useful information for this event. Note that when the login session terminates, all keychains become effectively locked; however, no `kSecLockEvent` events are generated in this case.

# kSecLockEvent (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Indicates a keychain was locked.

## Declaration

```objectivec
kSecLockEvent
```

<a id="Discussion"></a>

## Discussion

It is impossible to distinguish between a lock event caused by an explicit request and one caused by a keychain that locked itself because of a timeout. Therefore, the `pid` parameter in the [SecKeychainCallbackInfo](../seckeychaincallbackinfo.md) structure does not contain useful information for this event. Note that when the login session terminates, all keychains become effectively locked; however, no `kSecLockEvent` events are generated in this case.
