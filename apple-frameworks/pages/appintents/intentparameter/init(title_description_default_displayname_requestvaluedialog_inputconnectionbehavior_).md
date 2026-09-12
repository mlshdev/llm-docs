> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:default:displayname:requestvaluedialog:inputconnectionbehavior:)](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:displayname:requestvaluedialog:inputconnectionbehavior:))

# init(title:description:default:displayName:requestValueDialog:inputConnectionBehavior:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter.

## Declaration

```swift
convenience init(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, displayName: Bool.IntentDisplayName? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default)
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `displayName`: The name that is displayed to describe this parameter value.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.

## See Also

### Creating an intent parameter

- [init(title:description:default:displayName:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_displayname_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Bool`. Creates an app intent parameter that can convert the selected value.
