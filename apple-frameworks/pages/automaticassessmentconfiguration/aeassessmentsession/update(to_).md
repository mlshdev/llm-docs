> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsession/update(to:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsession/update(to:))

# update(to:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Changes the session to use the specified configuration.

## Declaration

```swift
func update(to configuration: AEAssessmentConfiguration)
```

## Parameters

- `configuration`: A new configuration to use for the session.

<a id="Discussion"></a>

## Discussion

After you call this method, the session tries to apply the new configuration and then calls its delegate’s [assessmentSessionDidUpdate(\_:)](../aeassessmentsessiondelegate/assessmentsessiondidupdate%28__%29.md) method to indicate success, or the delegate’s [assessmentSession(\_:failedToUpdateTo:error:)](../aeassessmentsessiondelegate/assessmentsession%28__failedtoupdateto_error_%29.md) method to indicate failure. Wait to receive one of these callbacks before proceeding with an assessment, and be sure to handle the failure case.

## See Also

### Managing session configuration

- [configuration](configuration.md): The current configuration of the session.
- [supportsMultipleParticipants](supportsmultipleparticipants.md): A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.

# updateToConfiguration: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Changes the session to use the specified configuration.

## Declaration

```objectivec
- (void) updateToConfiguration:(AEAssessmentConfiguration *) configuration;
```

## Parameters

- `configuration`: A new configuration to use for the session.

<a id="Discussion"></a>

## Discussion

After you call this method, the session tries to apply the new configuration and then calls its delegate’s [assessmentSessionDidUpdate:](../aeassessmentsessiondelegate/assessmentsessiondidupdate%28__%29.md) method to indicate success, or the delegate’s [assessmentSession:failedToUpdateToConfiguration:error:](../aeassessmentsessiondelegate/assessmentsession%28__failedtoupdateto_error_%29.md) method to indicate failure. Wait to receive one of these callbacks before proceeding with an assessment, and be sure to handle the failure case.

## See Also

### Managing session configuration

- [configuration](configuration.md): The current configuration of the session.
- [supportsMultipleParticipants](supportsmultipleparticipants.md): A Boolean that indicates whether the current device or platform supports a configuration with one or more participant applications.
- [supportsConfigurationUpdates](supportsconfigurationupdates.md): A Boolean that indicates whether the current device or platform supports updating a session’s configuration after the session has begun.
