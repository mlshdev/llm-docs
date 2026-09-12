> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8j88q](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-8j88q)

# init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an app intent parameter with a list of selectable options.

## Declaration

```swift
convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider) where OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == Measurement<UnitIlluminance>
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `optionsProvider`: An object that determines selectable options for this parameter.

## See Also

### Creating an intent parameter

- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-81yqr.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-2486g.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-73fj3.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-1ji9i.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_resolvers_optionsprovider_%29-4hm4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
