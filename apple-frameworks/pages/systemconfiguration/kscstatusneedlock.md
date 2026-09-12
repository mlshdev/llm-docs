> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscstatusneedlock](https://developer.apple.com/documentation/systemconfiguration/kscstatusneedlock)

# kSCStatusNeedLock (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A lock is required for this operation.

## Declaration

```swift
var kSCStatusNeedLock: Int { get }
```

## See Also

### Constants

- [kSCStatusOK](kscstatusok.md): The call was successful.
- [kSCStatusFailed](kscstatusfailed.md): A nonspecific failure occurred.
- [kSCStatusInvalidArgument](kscstatusinvalidargument.md): An invalid argument was specified.
- [kSCStatusAccessError](kscstatusaccesserror.md): Permission is denied; you must be root to obtain a lock. As a result, the function could not create or access preferences.
- [kSCStatusNoKey](kscstatusnokey.md): No such key.
- [kSCStatusKeyExists](kscstatuskeyexists.md)
- [kSCStatusLocked](kscstatuslocked.md): A lock is already held.
- [kSCStatusNoStoreSession](kscstatusnostoresession.md): The configuration daemon session is not active.
- [kSCStatusNoStoreServer](kscstatusnostoreserver.md): The configuration daemon is not available or no longer available.
- [kSCStatusNotifierActive](kscstatusnotifieractive.md): Notifier is currently active.
- [kSCStatusNoPrefsSession](kscstatusnoprefssession.md): The preferences session is not active.
- [kSCStatusPrefsBusy](kscstatusprefsbusy.md): A preferences update is currently in progress.
- [kSCStatusNoConfigFile](kscstatusnoconfigfile.md): The configuration file cannot be found.
- [kSCStatusNoLink](kscstatusnolink.md): No such link exists.
- [kSCStatusStale](kscstatusstale.md): A write was attempted on a stale version of the object.

# kSCStatusNeedLock (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A lock is required for this operation.

## Declaration

```objectivec
kSCStatusNeedLock
```

## See Also

### Constants

- [kSCStatusOK](kscstatusok.md): The call was successful.
- [kSCStatusFailed](kscstatusfailed.md): A nonspecific failure occurred.
- [kSCStatusInvalidArgument](kscstatusinvalidargument.md): An invalid argument was specified.
- [kSCStatusAccessError](kscstatusaccesserror.md): Permission is denied; you must be root to obtain a lock. As a result, the function could not create or access preferences.
- [kSCStatusNoKey](kscstatusnokey.md): No such key.
- [kSCStatusKeyExists](kscstatuskeyexists.md)
- [kSCStatusLocked](kscstatuslocked.md): A lock is already held.
- [kSCStatusNoStoreSession](kscstatusnostoresession.md): The configuration daemon session is not active.
- [kSCStatusNoStoreServer](kscstatusnostoreserver.md): The configuration daemon is not available or no longer available.
- [kSCStatusNotifierActive](kscstatusnotifieractive.md): Notifier is currently active.
- [kSCStatusNoPrefsSession](kscstatusnoprefssession.md): The preferences session is not active.
- [kSCStatusPrefsBusy](kscstatusprefsbusy.md): A preferences update is currently in progress.
- [kSCStatusNoConfigFile](kscstatusnoconfigfile.md): The configuration file cannot be found.
- [kSCStatusNoLink](kscstatusnolink.md): No such link exists.
- [kSCStatusStale](kscstatusstale.md): A write was attempted on a stale version of the object.
