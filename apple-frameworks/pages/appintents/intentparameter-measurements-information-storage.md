> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-measurements-information-storage](https://developer.apple.com/documentation/appintents/intentparameter-measurements-information-storage)

# Information storage

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain information storage values.

## Topics

### Creating an intent parameter

- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-7i4yk.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:defaultUnit:defaultUnitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_defaultvalue_defaultunit_defaultunitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-53sza.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter with a default unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_%29-38ide.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:defaultValue:unit:unitAdjustForLocale:supportsNegativeNumbers:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_defaultvalue_unit_unitadjustforlocale_supportsnegativenumbers_requestvaluedialog_inputconnectionbehavior_resolvers_%29-2jxve.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter that specifies the unit for the measurement.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-7fp2k.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:inputConnectionBehavior:resolvers:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_resolvers_optionsprovider_%29-zx45.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`. Creates an app intent parameter with a list of selectable options that can convert the selected value.

### Accessing unit details

- [unit](intentparameter/unit-36fxd.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [IntentParameter.InformationStorage](intentparameter/informationstorage.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [defaultUnit](intentparameter/defaultunit-ry6s.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [supportsNegativeNumbers](intentparameter/supportsnegativenumbers-9qbxt.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [unitAdjustForLocale](intentparameter/unitadjustforlocale-f41e.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.

## See Also

### Creating an intent parameter for measurements

- [Acceleration](intentparameter-measurements-acceleration.md): Configure the details for parameter variables that contain acceleration values.
- [Angles](intentparameter-measurements-angle.md): Configure the details for parameter variables that contain angles.
- [Area](intentparameter-measurements-area.md): Configure the details for parameter variables that contain area values.
- [Concentration mass](intentparameter-measurements-concentration-mass.md): Configure the details for parameter variables that contain concentration mass values.
- [Dispersion](intentparameter-measurements-dispersion.md): Configure the details for parameter variables that contain dispersion values.
- [Durations](intentparameter-measurements-duration.md): Configure the details for parameter variables that contain durations.
- [Electric charge](intentparameter-measurements-electric-charge.md): Configure the details for parameter variables that contain electric charge values.
- [Electric current](intentparameter-measurements-electric-current.md): Configure the details for parameter variables that contain electric current values.
- [Electric potential difference](intentparameter-measurements-electric-difference.md): Configure the details for parameter variables that contain values of electric potential difference.
- [Electric resistance](intentparameter-measurements-electric-resistance.md): Configure the details for parameter variables that contain electric resistance values.
- [Energy](intentparameter-measurements-energy.md): Configure the details for parameter variables that contain energy values.
- [Frequency](intentparameter-measurements-frequency.md): Configure the details for parameter variables that contain frequency values.
- [Fuel efficiency](intentparameter-measurements-fuel-efficiency.md): Configure the details for parameter variables that contain fuel efficiency values.
- [Illuminance](intentparameter-measurements-illuminance.md): Configure the details for parameter variables that contain illuminance values.
- [Length](intentparameter-measurements-length.md): Configure the details for parameter variables that contain length values.
