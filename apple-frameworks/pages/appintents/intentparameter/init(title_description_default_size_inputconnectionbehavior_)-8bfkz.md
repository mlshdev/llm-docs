> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-8bfkz](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:size:inputconnectionbehavior:)-8bfkz)

# init(title:description:default:size:inputConnectionBehavior:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ (deprecated in 18.0) · iPadOS 17.0+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0) · macOS 14.0+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS · watchOS 10.0+ (deprecated in 11.0)

Creates an app intent parameter for an array with a specified size.

## Declaration

```swift
convenience init(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, size: IntentCollectionSize, inputConnectionBehavior: InputConnectionBehavior = .default)
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `size`: The size of the array you specify to limit the amount of values.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.

## See Also

### Deprecated intiializers

- [init(title:description:default:size:inputConnectionBehavior:)](init%28title_description_default_size_inputconnectionbehavior_%29-7cox5.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:query:)](init%28title_description_default_size_inputconnectionbehavior_query_%29-1rwev.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:query:)](init%28title_description_default_size_inputconnectionbehavior_query_%29-7yfm3.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-8o0lz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_optionsprovider_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_%29-tfj8.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:query:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_query_%29-49n42.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with an entity search query.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_resolvers_%29-1csrx.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter that can convert the selected value.
