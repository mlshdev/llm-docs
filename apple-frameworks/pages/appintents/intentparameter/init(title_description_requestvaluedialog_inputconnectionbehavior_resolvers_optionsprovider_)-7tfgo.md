> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-7tfgo](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:)-7tfgo)

# init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an app intent parameter with a list of selectable options that can convert the selected value.

## Declaration

```swift
convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec, optionsProvider: OptionsProvider) where Spec : ResolverSpecification, OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == Measurement<UnitElectricResistance>
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

- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-3hah0.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-4kgba.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-65c81.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-19rj5.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-7gjzx.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`. Creates an app intent parameter with a list of selectable options.
