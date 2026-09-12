> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/configuration](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/configuration)

# configuration (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The current configuration of the session.

## Declaration

```swift
@NSCopying var configuration: AEAssessmentConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

You configure a session when you create it with the [init(configuration:)](init%28configuration_%29.md) initializer. You can later change the configuration by calling the [update(to:)](update%28to_%29.md) method. Read the [configuration](configuration.md) property to obtain the session’s current configuration.

## See Also

### Managing session configuration

- [update(to:)](update%28to_%29.md): Changes the session to use the specified configuration.
- [supportsMultipleParticipants](supportsmultipleparticipants.md): A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.

# configuration (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The current configuration of the session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) AEAssessmentConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

You configure a session when you create it with the [initWithConfiguration:](init%28configuration_%29.md) initializer. You can later change the configuration by calling the [updateToConfiguration:](update%28to_%29.md) method. Read the [configuration](configuration.md) property to obtain the session’s current configuration.

## See Also

### Managing session configuration

- [updateToConfiguration:](update%28to_%29.md): Changes the session to use the specified configuration.
- [supportsMultipleParticipants](supportsmultipleparticipants.md): A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.
