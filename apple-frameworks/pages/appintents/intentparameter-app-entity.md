> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-app-entity](https://developer.apple.com/documentation/appintents/intentparameter-app-entity)

# App entities

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain custom app entities.

## Topics

### Creating an intent parameter

- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_%29-90j68.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:query:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_query_%29-4yyz3.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with an entity search query.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_resolvers_%29-9fsdb.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter that can convert the selected value.

### Deprecated intiializers

- [init(title:description:default:size:inputConnectionBehavior:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_%29-7cox5.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:query:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_query_%29-1rwev.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:query:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_query_%29-7yfm3.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-1f92a.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:default:size:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_resolvers_%29-8o0lz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:default:size:inputConnectionBehavior:)](intentparameter/init%28title_description_default_size_inputconnectionbehavior_%29-8bfkz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter for an array with a specified size.
- [init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_optionsprovider_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_%29-tfj8.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:query:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_query_%29-49n42.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter with an entity search query.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_resolvers_%29-1csrx.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEntity`. Creates an app intent parameter that can convert the selected value.

## See Also

### Creating an intent parameter for custom types

- [App enums](intentparameter-app-enum.md): Configure the details for parameter variables that contain custom app enums.
