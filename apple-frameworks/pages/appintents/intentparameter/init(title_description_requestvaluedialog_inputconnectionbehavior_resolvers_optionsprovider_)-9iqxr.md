> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-9iqxr](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-9iqxr)

# init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter with a list of selectable options that can convert the selected value.

## Declaration

```swift
convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec, optionsProvider: OptionsProvider) where Spec : ResolverSpecification, OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == Measurement<UnitTemperature>
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `resolvers`: An object that converts a value of another type to this parameter’s type.
- `optionsProvider`: An object that determines selectable options for this parameter.

## See Also

### Creating an intent parameter

- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-5i0hc.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitSpeed>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-7l000.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-7sgxq.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-2lxxx.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-3t56o.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-3u0y1.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`. Creates an app intent parameter with a list of selectable options.
