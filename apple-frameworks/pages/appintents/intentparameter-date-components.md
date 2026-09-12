> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-date-components](https://developer.apple.com/documentation/appintents/intentparameter-date-components)

# Date components

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain date components.

## Topics

### Creating an intent parameter

- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_%29-1no2a.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`. Creates an app intent parameter.
- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-38o37.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-4438x.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_resolvers_%29-8vfnx.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`. Creates an app intent parameter that can convert the selected value.

### Accessing the date kind

- [dateKind](intentparameter/datekind-7wjso.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`.
- [IntentParameter.DateKind](intentparameter/datekind-swift.enum.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`.

## See Also

### Creating an intent parameter for common framework types

- [Dates](intentparameter-date.md): Configure the details for parameter variables that contain date values.
- [Files](intentparameter-file.md): Configure the details for parameter variables that contain files.
- [Currencies](intentparameter-currencies.md): Configure the details for parameter variables that contain currency values.
- [Payments](intentparameter-payments.md): Configure the details for parameter variables that contain payment-related values.
- [People](intentparameter-person.md): Configure the details for parameter variables that contain references to people.
- [Placemarks](intentparameter-placemark.md): Configure the details for parameter variables that contain a geographic location.
- [Measurements](intentparameter-measurements.md): Configure the details for parameter variables that contain, among others, temperature, mass, speed, energy, duration, length, and volume values.
