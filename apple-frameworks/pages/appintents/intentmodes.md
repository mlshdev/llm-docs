> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentmodes](https://developer.apple.com/documentation/appintents/intentmodes)

# IntentModes

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of options you use to configure the runtime behavior of an app intent.

## Declaration

```swift
struct IntentModes
```

<a id="overview"></a>

## Overview

This structure defines the mode values you can assign to the [supportedModes](appintent/supportedmodes.md) property of your app intent. Intent modes indicate whether your app needs to run in the foreground or background when performing the app intent’s action. For example, the [foreground](intentmodes/foreground.md) mode requires your app intent code to run in a foreground process.

At runtime, an app intent’s [systemContext](appintent/systemcontext.md) property also contains information about whether the process is currently running in the foreground or background. Use that information to make additional decisions about how to perform the action. For more information, see the [IntentModes.Current](intentmodes/current.md) type.

## Topics

### Structures

- [IntentModes.Current](intentmodes/current.md): The current runtime behavior of an app intent.
- [IntentModes.ForegroundMode](intentmodes/foregroundmode.md): A type that defines the available foreground behaviors for an app intent.

### Type Properties

- [background](intentmodes/background.md): A value that indicates the action can run in the background.
- [foreground](intentmodes/foreground.md): A value that indicates the action needs to run in the foreground.

### Type Methods

- [foreground(\_:)](intentmodes/foreground%28__%29.md): Creates and returns a foreground mode with a specified behavior.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Intent-related data

- [IntentSystemContext](intentsystemcontext.md): Contextual information that the system provides while it performs an app intent.
- [IntentDescription](intentdescription.md): The human-readable description and metadata for an app intent.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentDeprecation](intentdeprecation.md)
- [IntentProjection](intentprojection.md): Projections for an app intent that returns non-optional values for parameters.
