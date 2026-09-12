> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/configurationsbyapplication](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/configurationsbyapplication)

# configurationsByApplication (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The collection of apps available during an assessment, along with their associated configurations.

## Declaration

```swift
var configurationsByApplication: [AEAssessmentApplication : AEAssessmentParticipantConfiguration] { get }
```

<a id="Discussion"></a>

## Discussion

Access this property to get a list of the currently allowed secondary apps and their individual configurations. Add apps to the list by calling the `AEAssessmentConfiguration/setConfiguration(_:for:)` method. Remove them from the list by calling the `AEAssessmentConfiguration/remove(_:)` method.

## See Also

### Allowing access to other apps

- [mainParticipantConfiguration](mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](../aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.

# configurationsByApplication (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The collection of apps available during an assessment, along with their associated configurations.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<AEAssessmentApplication *,AEAssessmentParticipantConfiguration *> * configurationsByApplication;
```

<a id="Discussion"></a>

## Discussion

Access this property to get a list of the currently allowed secondary apps and their individual configurations. Add apps to the list by calling the `AEAssessmentConfiguration/setConfiguration(_:for:)` method. Remove them from the list by calling the `AEAssessmentConfiguration/remove(_:)` method.

## See Also

### Allowing access to other apps

- [mainParticipantConfiguration](mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](../aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.
