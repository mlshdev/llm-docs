> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-payments](https://developer.apple.com/documentation/appintents/intentparameter-payments)

# Payments

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain payment-related values.

## Topics

### Creating an intent parameter

- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-7urpy.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPaymentMethod`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-7y2uj.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPaymentMethod`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_resolvers_optionsprovider_%29-1x2m9.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricPotentialDifference>`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_resolvers_%29-35yv4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPaymentMethod`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_resolvers_%29-k1m2.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `_IntentValueRepresentable`. Creates an app intent parameter that can convert the selected value.

## See Also

### Creating an intent parameter for common framework types

- [Dates](intentparameter-date.md): Configure the details for parameter variables that contain date values.
- [Date components](intentparameter-date-components.md): Configure the details for parameter variables that contain date components.
- [Files](intentparameter-file.md): Configure the details for parameter variables that contain files.
- [Currencies](intentparameter-currencies.md): Configure the details for parameter variables that contain currency values.
- [People](intentparameter-person.md): Configure the details for parameter variables that contain references to people.
- [Placemarks](intentparameter-placemark.md): Configure the details for parameter variables that contain a geographic location.
- [Measurements](intentparameter-measurements.md): Configure the details for parameter variables that contain, among others, temperature, mass, speed, energy, duration, length, and volume values.
