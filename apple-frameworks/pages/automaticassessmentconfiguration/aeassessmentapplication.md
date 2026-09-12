> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication)

# AEAssessmentApplication (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A representation of an app that users can access during an assessment.

## Declaration

```swift
class AEAssessmentApplication
```

<a id="overview"></a>

## Overview

Use an instance of this class when you want to make an app besides yours, like a calculator or a dictionary, available during an assessment. Create a representation of the app that you want to allow using the app’s bundle identifier and optionally the identifier of the team that distributes the app. You can get both identifiers for an app that you have installed using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

By default, the system requires that the app’s code signature is valid, and that either Apple distributes the app, or the developer notarizes the app or distributes it through the App Store. You can relax these requirements by setting the [requiresSignatureValidation](aeassessmentapplication/requiressignaturevalidation.md) property to `false`, but that creates a potential security risk. In that case, the only requirement is that the app has the specified bundle and team identifiers. Prefer to keep the signature requirement.

Add the app to a session configuration by calling the `AEAssessmentConfiguration/setConfiguration(_:for:)` method, and then apply the configuration to either a new session that you create, or an existing session with the [update(to:)](aeassessmentsession/update%28to_%29.md) method.

## Topics

### Creating an assessment application

- [init(bundleIdentifier:teamIdentifier:)](aeassessmentapplication/init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [init(bundleIdentifier:)](aeassessmentapplication/init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](aeassessmentapplication/bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](aeassessmentapplication/teamidentifier.md): The team identifier of the app.

### Requiring code-signed apps

- [requiresSignatureValidation](aeassessmentapplication/requiressignaturevalidation.md): A Boolean that indicates whether the session requires the app to have a valid code signature to run.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.

# AEAssessmentApplication (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A representation of an app that users can access during an assessment.

## Declaration

```objectivec
@interface AEAssessmentApplication : NSObject
```

<a id="overview"></a>

## Overview

Use an instance of this class when you want to make an app besides yours, like a calculator or a dictionary, available during an assessment. Create a representation of the app that you want to allow using the app’s bundle identifier and optionally the identifier of the team that distributes the app. You can get both identifiers for an app that you have installed using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

By default, the system requires that the app’s code signature is valid, and that either Apple distributes the app, or the developer notarizes the app or distributes it through the App Store. You can relax these requirements by setting the [requiresSignatureValidation](aeassessmentapplication/requiressignaturevalidation.md) property to `false`, but that creates a potential security risk. In that case, the only requirement is that the app has the specified bundle and team identifiers. Prefer to keep the signature requirement.

Add the app to a session configuration by calling the `AEAssessmentConfiguration/setConfiguration(_:for:)` method, and then apply the configuration to either a new session that you create, or an existing session with the [updateToConfiguration:](aeassessmentsession/update%28to_%29.md) method.

## Topics

### Creating an assessment application

- [initWithBundleIdentifier:teamIdentifier:](aeassessmentapplication/init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [initWithBundleIdentifier:](aeassessmentapplication/init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](aeassessmentapplication/bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](aeassessmentapplication/teamidentifier.md): The team identifier of the app.

### Requiring code-signed apps

- [requiresSignatureValidation](aeassessmentapplication/requiressignaturevalidation.md): A Boolean that indicates whether the session requires the app to have a valid code signature to run.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.
