> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-currencies](https://developer.apple.com/documentation/appintents/intentparameter-currencies)

# Currencies

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain currency values.

## Topics

### Creating an intent parameter

- [init(title:description:currencyCodes:inclusiveRange:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_currencycodes_inclusiverange_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`. Creates an app intent parameter.
- [init(title:description:currencyCodes:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_currencycodes_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:currencyCodes:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_currencycodes_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:currencyCodes:inclusiveRange:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_currencycodes_inclusiverange_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`. Creates an app intent parameter that can convert the selected value.

### Accessing the configuration

- [currencyCodes](intentparameter/currencycodes.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
- [inclusiveRange](intentparameter/inclusiverange-swift.property.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
- [IntentParameter.InclusiveRange](intentparameter/inclusiverange-swift.typealias.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`.

## See Also

### Creating an intent parameter for common framework types

- [Dates](intentparameter-date.md): Configure the details for parameter variables that contain date values.
- [Date components](intentparameter-date-components.md): Configure the details for parameter variables that contain date components.
- [Files](intentparameter-file.md): Configure the details for parameter variables that contain files.
- [Payments](intentparameter-payments.md): Configure the details for parameter variables that contain payment-related values.
- [People](intentparameter-person.md): Configure the details for parameter variables that contain references to people.
- [Placemarks](intentparameter-placemark.md): Configure the details for parameter variables that contain a geographic location.
- [Measurements](intentparameter-measurements.md): Configure the details for parameter variables that contain, among others, temperature, mass, speed, energy, duration, length, and volume values.
