> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/setconfiguration(_:for:)-2tjgb](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/setconfiguration(_:for:)-2tjgb)

# setConfiguration(\_:for:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Adds an app to the list of apps available during an assessment.

## Declaration

```swift
func setConfiguration(_ configuration: AEAssessmentParticipantConfiguration, for application: AEAssessmentApplication)
```

## Parameters

- `configuration`: The configuration of the secondary app.
- `application`: The app that you want to configure.

<a id="discussion"></a>

## Discussion

Use this method to make an app besides your own available during an assessment. Create a representation of the app that you want to allow as an [AEAssessmentApplication](../aeassessmentapplication.md) instance, and the configuration for that app using an [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md) instance:

```swift
let calculator = AEAssessmentApplication(bundleIdentifier: "com.apple.calculator")
let calculatorConfig = AEAssessmentParticipantConfiguration()
calculatorConfig.allowsNetworkAccess = false // Calculator doesn't need the network.
```

Use the app and its configuration to create an assessment configuration, and either create an assessment session with that, or update an existing session as shown below:

```swift
let configuration = AEAssessmentConfiguration()
configuration.setConfiguration(calculatorConfig, for: calculator)
session.update(to: configuration)
```

You can get a list of the currently allowed apps by accessing the [configurationsByApplication](configurationsbyapplication.md) property. You can disallow a previously allowed app by using the `AEAssessmentConfiguration/remove(_:)` method.

# setConfiguration:forApplication: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Adds an app to the list of apps available during an assessment.

## Declaration

```objectivec
- (void) setConfiguration:(AEAssessmentParticipantConfiguration *) configuration forApplication:(AEAssessmentApplication *) application;
```

## Parameters

- `configuration`: The configuration of the secondary app.
- `application`: The app that you want to configure.

<a id="discussion"></a>

## Discussion

Use this method to make an app besides your own available during an assessment. Create a representation of the app that you want to allow as an [AEAssessmentApplication](../aeassessmentapplication.md) instance, and the configuration for that app using an [AEAssessmentParticipantConfiguration](../aeassessmentparticipantconfiguration.md) instance:

```swift
let calculator = AEAssessmentApplication(bundleIdentifier: "com.apple.calculator")
let calculatorConfig = AEAssessmentParticipantConfiguration()
calculatorConfig.allowsNetworkAccess = false // Calculator doesn't need the network.
```

Use the app and its configuration to create an assessment configuration, and either create an assessment session with that, or update an existing session as shown below:

```swift
let configuration = AEAssessmentConfiguration()
configuration.setConfiguration(calculatorConfig, for: calculator)
session.update(to: configuration)
```

You can get a list of the currently allowed apps by accessing the [configurationsByApplication](configurationsbyapplication.md) property. You can disallow a previously allowed app by using the `AEAssessmentConfiguration/remove(_:)` method.
