> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:)](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:optionsprovider:))

# init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS · watchOS 9.0+ (deprecated in 11.0)

Creates an app intent parameter with a list of selectable options.

## Declaration

```swift
convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, requestValueDialog: IntentDialog? = nil, requestDisambiguationDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider) where OptionsProvider : DynamicOptionsProvider, Value.ValueType == OptionsProvider.DefaultValue.ValueType
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `requestDisambiguationDialog`: A prompt that asks a person to choose among possible parameter values.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `optionsProvider`: An object that determines selectable options for this parameter.

## See Also

### Deprecated intiializers

- [init(title:description:default:size:inputConnectionBehavior:)](init%28title_description_default_size_inputconnectionbehavior_%29-7cox5.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:query:)](init%28title_description_default_size_inputconnectionbehavior_query_%29-1rwev.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:query:)](init%28title_description_default_size_inputconnectionbehavior_query_%29-7yfm3.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-8o0lz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:)](init%28title_description_default_size_inputconnectionbehavior_%29-8bfkz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_%29-tfj8.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:query:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_query_%29-49n42.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with an entity search query.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_resolvers_%29-1csrx.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter that can convert the selected value.
