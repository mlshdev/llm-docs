> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scpreferencesnotification/apply

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
