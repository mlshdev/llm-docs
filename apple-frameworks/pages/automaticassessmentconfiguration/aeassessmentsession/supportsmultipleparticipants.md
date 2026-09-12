> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/supportsmultipleparticipants](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/supportsmultipleparticipants)

# supportsMultipleParticipants (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Type Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+

A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.

## Declaration

```swift
class var supportsMultipleParticipants: Bool { get }
```

## See Also

### Managing session configuration

- [update(to:)](update%28to_%29.md): Changes the session to use the specified configuration.
- [configuration](configuration.md): The current configuration of the session.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.

# supportsMultipleParticipants (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Type Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+

A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.

## Declaration

```objectivec
@property (class, assign, readonly) BOOL supportsMultipleParticipants;
```

## See Also

### Managing session configuration

- [updateToConfiguration:](update%28to_%29.md): Changes the session to use the specified configuration.
- [configuration](configuration.md): The current configuration of the session.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.
