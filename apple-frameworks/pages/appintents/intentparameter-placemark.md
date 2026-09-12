> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-placemark](https://developer.apple.com/documentation/appintents/intentparameter-placemark)

# Placemarks

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain a geographic location.

## Topics

### Creating an intent parameter

- [init(title:description:displayStyle:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_displaystyle_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`. Creates an app intent parameter.
- [init(title:description:displayStyle:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_displaystyle_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:displayStyle:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_displaystyle_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:displayStyle:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_displaystyle_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`. Creates an app intent parameter that can convert the selected value.

### Accessing the display style

- [displayStyle](intentparameter/displaystyle.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`.
- [IntentParameter.PlacemarkDisplayStyle](intentparameter/placemarkdisplaystyle.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Describes a location’s display style in Shortcuts and Siri Suggestions.

## See Also

### Creating an intent parameter for common framework types

- [Dates](intentparameter-date.md): Configure the details for parameter variables that contain date values.
- [Date components](intentparameter-date-components.md): Configure the details for parameter variables that contain date components.
- [Files](intentparameter-file.md): Configure the details for parameter variables that contain files.
- [Currencies](intentparameter-currencies.md): Configure the details for parameter variables that contain currency values.
- [Payments](intentparameter-payments.md): Configure the details for parameter variables that contain payment-related values.
- [People](intentparameter-person.md): Configure the details for parameter variables that contain references to people.
- [Measurements](intentparameter-measurements.md): Configure the details for parameter variables that contain, among others, temperature, mass, speed, energy, duration, length, and volume values.
