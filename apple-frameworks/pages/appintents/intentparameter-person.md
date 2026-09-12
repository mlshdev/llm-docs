> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-person](https://developer.apple.com/documentation/appintents/intentparameter-person)

# People

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain references to people.

## Topics

### Creating an intent parameter

- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:mode:size:inputConnectionBehavior:)](intentparameter/init%28title_description_mode_size_inputconnectionbehavior_%29-1i2sn.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:mode:size:inputConnectionBehavior:)](intentparameter/init%28title_description_mode_size_inputconnectionbehavior_%29-6efsz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter for an array with a specified size.

### Accessing the parameter mode

- [parameterMode](intentparameter/parametermode.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`.
- [IntentPerson.ParameterMode](intentperson/parametermode.md): The type of interface to show when someone chooses a parameter that contains information about a person.

## See Also

### Creating an intent parameter for common framework types

- [Dates](intentparameter-date.md): Configure the details for parameter variables that contain date values.
- [Date components](intentparameter-date-components.md): Configure the details for parameter variables that contain date components.
- [Files](intentparameter-file.md): Configure the details for parameter variables that contain files.
- [Currencies](intentparameter-currencies.md): Configure the details for parameter variables that contain currency values.
- [Payments](intentparameter-payments.md): Configure the details for parameter variables that contain payment-related values.
- [Placemarks](intentparameter-placemark.md): Configure the details for parameter variables that contain a geographic location.
- [Measurements](intentparameter-measurements.md): Configure the details for parameter variables that contain, among others, temperature, mass, speed, energy, duration, length, and volume values.
