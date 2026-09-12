> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/mainparticipantconfiguration](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/mainparticipantconfiguration)

# mainParticipantConfiguration (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The app-specific configuration for the app that invokes the assessment.

## Declaration

```swift
var mainParticipantConfiguration: AEAssessmentParticipantConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to get and customize the app-specific configuration that’s applied to your own app. For example, you can set the [allowsNetworkAccess](../aeassessmentparticipantconfiguration/allowsnetworkaccess.md) property for your own app:

**Swift**

```swift
let config = AEAssessmentConfiguration()
config.mainParticipantConfiguration.allowsNetworkAccess = false
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [[AEAssessmentConfiguration alloc] init];
[config mainParticipantConfiguration].allowsNetworkAccess = NO;
```

## See Also

### Allowing access to other apps

- [configurationsByApplication](configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [AEAssessmentApplication](../aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.

# mainParticipantConfiguration (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The app-specific configuration for the app that invokes the assessment.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) AEAssessmentParticipantConfiguration * mainParticipantConfiguration;
```

<a id="Discussion"></a>

## Discussion

Use this property to get and customize the app-specific configuration that’s applied to your own app. For example, you can set the [allowsNetworkAccess](../aeassessmentparticipantconfiguration/allowsnetworkaccess.md) property for your own app:

**Swift**

```swift
let config = AEAssessmentConfiguration()
config.mainParticipantConfiguration.allowsNetworkAccess = false
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [[AEAssessmentConfiguration alloc] init];
[config mainParticipantConfiguration].allowsNetworkAccess = NO;
```

## See Also

### Allowing access to other apps

- [configurationsByApplication](configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [AEAssessmentApplication](../aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.
