> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesnotification/apply](https://developer.apple.com/documentation/systemconfiguration/scpreferencesnotification/apply)

# apply (Swift)

**Framework:** System Configuration  
**Kind:** Type Property  
**Availability:** macOS 10.4+

Indicates when a request has been made to apply the currently saved preferences to the active system configuration.

## Declaration

```swift
static var apply: SCPreferencesNotification { get }
```

## See Also

### Constants

- [commit](commit.md): Indicates when new preferences have been saved.

# kSCPreferencesNotificationApply (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+

Indicates when a request has been made to apply the currently saved preferences to the active system configuration.

## Declaration

```objectivec
kSCPreferencesNotificationApply
```

## See Also

### Constants

- [kSCPreferencesNotificationCommit](commit.md): Indicates when new preferences have been saved.
