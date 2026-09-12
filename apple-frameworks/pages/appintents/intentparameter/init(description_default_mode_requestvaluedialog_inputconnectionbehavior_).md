> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:)](https://developer.apple.com/documentation/appintents/intentparameter/init(description:default:mode:requestvaluedialog:inputconnectionbehavior:))

# init(description:default:mode:requestValueDialog:inputConnectionBehavior:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an app intent parameter.

## Declaration

```swift
convenience init(description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, mode: IntentPerson.ParameterMode = .contact, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default)
```

## Parameters

- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `mode`: The user interface that appears when a person chooses a value for this parameter. Default value is `.contact`.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
