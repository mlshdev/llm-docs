> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparametercontext](https://developer.apple.com/documentation/appintents/intentparametercontext)

# IntentParameterContext

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that provides information about an associated parameter during value resolution.

## Declaration

```swift
struct IntentParameterContext<Value> where Value : _IntentValue, Value : Sendable
```

## Topics

### Instance Properties

- [controlStyle](intentparametercontext/controlstyle-2sflf.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`.
- [controlStyle](intentparametercontext/controlstyle-6k0y7.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`.
- [currencyCodes](intentparametercontext/currencycodes.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
- [dateKind](intentparametercontext/datekind-1znbd.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Date`.
- [dateKind](intentparametercontext/datekind-301pp.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `DateComponents`.
- [defaultUnit](intentparametercontext/defaultunit-14jlt.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFuelEfficiency>`.
- [defaultUnit](intentparametercontext/defaultunit-1b43r.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitLength>`.
- [defaultUnit](intentparametercontext/defaultunit-1h4fh.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAcceleration>`.
- [defaultUnit](intentparametercontext/defaultunit-1iv6c.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`.
- [defaultUnit](intentparametercontext/defaultunit-2lxed.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDispersion>`.
- [defaultUnit](intentparametercontext/defaultunit-31gc1.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitVolume>`.
- [defaultUnit](intentparametercontext/defaultunit-3jg9t.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitMass>`.
- [defaultUnit](intentparametercontext/defaultunit-3yj46.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitConcentrationMass>`.
- [defaultUnit](intentparametercontext/defaultunit-4utvz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricPotentialDifference>`.
- [defaultUnit](intentparametercontext/defaultunit-60crf.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitEnergy>`.
- [defaultUnit](intentparametercontext/defaultunit-60fdy.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFrequency>`.
- [defaultUnit](intentparametercontext/defaultunit-65ijm.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCharge>`.
- [defaultUnit](intentparametercontext/defaultunit-65voi.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [defaultUnit](intentparametercontext/defaultunit-6qm7u.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAngle>`.
- [defaultUnit](intentparametercontext/defaultunit-7ix5r.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitArea>`.
- [defaultUnit](intentparametercontext/defaultunit-7uvfx.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDuration>`.
- [defaultUnit](intentparametercontext/defaultunit-847tm.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`.
- [defaultUnit](intentparametercontext/defaultunit-8ois6.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [defaultUnit](intentparametercontext/defaultunit-9delu.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Duration`.
- [defaultUnit](intentparametercontext/defaultunit-9ibfi.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPower>`.
- [defaultUnit](intentparametercontext/defaultunit-b5mb.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPressure>`.
- [defaultUnit](intentparametercontext/defaultunit-dk7x.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitSpeed>`.
- [defaultUnit](intentparametercontext/defaultunit-mzcu.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCurrent>`.
- [displayName](intentparametercontext/displayname.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Bool`.
- [displayStyle](intentparametercontext/displaystyle.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `CLPlacemark`.
- [inclusiveRange](intentparametercontext/inclusiverange-276sa.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentCurrencyAmount`.
- [inclusiveRange](intentparametercontext/inclusiverange-7i6st.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`.
- [inclusiveRange](intentparametercontext/inclusiverange-8kc7r.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`.
- [parameterMode](intentparametercontext/parametermode.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-11s8.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-15kgw.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitMass>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-1e69e.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPower>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-25jk6.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-2w87c.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFrequency>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-39689.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCurrent>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-3ds0o.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitVolume>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-3erhs.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPressure>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-3ljcc.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDuration>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-41o2y.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFuelEfficiency>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-462o4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-59mfp.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitConcentrationMass>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-6hpxs.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-7650x.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDispersion>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-7i28a.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCharge>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-8617w.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitLength>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-8i9m4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricPotentialDifference>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-8ssre.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAcceleration>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-9d7pr.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitArea>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-9hw2e.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAngle>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-d2w4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitEnergy>`.
- [supportsNegativeNumbers](intentparametercontext/supportsnegativenumbers-jgtm.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitSpeed>`.
- [unit](intentparametercontext/unit-18npz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPower>`.
- [unit](intentparametercontext/unit-1mmz4.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricPotentialDifference>`.
- [unit](intentparametercontext/unit-2zxw8.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitMass>`.
- [unit](intentparametercontext/unit-34157.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCurrent>`.
- [unit](intentparametercontext/unit-38zpf.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitSpeed>`.
- [unit](intentparametercontext/unit-39r8x.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`.
- [unit](intentparametercontext/unit-4aapu.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [unit](intentparametercontext/unit-4awol.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPressure>`.
- [unit](intentparametercontext/unit-4koze.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDispersion>`.
- [unit](intentparametercontext/unit-4rx08.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitArea>`.
- [unit](intentparametercontext/unit-5p7x6.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitLength>`.
- [unit](intentparametercontext/unit-6qvx7.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCharge>`.
- [unit](intentparametercontext/unit-71usu.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitVolume>`.
- [unit](intentparametercontext/unit-72hcm.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [unit](intentparametercontext/unit-75ikr.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFrequency>`.
- [unit](intentparametercontext/unit-78ccp.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAngle>`.
- [unit](intentparametercontext/unit-78p18.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`.
- [unit](intentparametercontext/unit-7lril.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitEnergy>`.
- [unit](intentparametercontext/unit-8lih3.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFuelEfficiency>`.
- [unit](intentparametercontext/unit-8omlm.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitConcentrationMass>`.
- [unit](intentparametercontext/unit-fzbg.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAcceleration>`.
- [unit](intentparametercontext/unit-i68w.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDuration>`.
- [unit](intentparametercontext/unit-vecd.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Duration`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-108qa.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitEnergy>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-10odh.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitArea>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-18j21.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitIlluminance>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-1gvv5.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCharge>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-1ndgn.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitLength>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-3c4a3.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDispersion>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-48rfb.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitMass>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-4kowc.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitTemperature>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-5euoy.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAcceleration>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-5xz43.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitInformationStorage>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-6cf45.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFuelEfficiency>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-6zbbp.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitFrequency>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-77fh8.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitSpeed>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-79tzk.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitDuration>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-8w6d0.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPower>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-8x6an.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitPressure>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-9b11y.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitAngle>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-9kt4r.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitVolume>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-b2at.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricCurrent>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-fh5h.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitConcentrationMass>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-q9qf.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricPotentialDifference>`.
- [unitAdjustForLocale](intentparametercontext/unitadjustforlocale-srcg.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Measurement<UnitElectricResistance>`.

### Instance Methods

- [needsDisambiguationError(among:dialog:)](intentparametercontext/needsdisambiguationerror%28among_dialog_%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Returns a `restartPerform` error with context for the user to disambiguate amongst an array of values from for this parameter and re-perform the intent with the new value.
- [needsValueError(\_:)](intentparametercontext/needsvalueerror%28__%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Returns a `restartPerform` error with context to request a value from the user for this parameter and re-perform the intent with the new value.
- [requestConfirmation(for:dialog:)](intentparametercontext/requestconfirmation%28for_dialog_%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
- [requestConfirmation(for:dialog:view:)](intentparametercontext/requestconfirmation%28for_dialog_view_%29-6n0qp.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
- [requestConfirmation(for:dialog:view:)](intentparametercontext/requestconfirmation%28for_dialog_view_%29-97i0g.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
- [requestDisambiguation(among:dialog:)](intentparametercontext/requestdisambiguation%28among_dialog_%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Request that the user disambiguate amongst an array of values for this parameter.
- [requestValue(\_:)](intentparametercontext/requestvalue%28__%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Request a value from the user for this parameter.

## Relationships

### Conforms To

- [AnyIntentValue](anyintentvalue.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameters

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md): Enable people to configure app intents with their custom input values.
- [IntentParameter](intentparameter.md): A property wrapper that indicates the associated property is an input argument of the app intent.
- [IntentParameterDependency](intentparameterdependency.md): A property wrapper that represents an app intent dependency you use to provide dynamic options.
- [InputConnectionBehavior](inputconnectionbehavior.md): Describes the input behaviors for connecting a parameter to the output of the previous App Intent.
- [DynamicOptionsProvider](dynamicoptionsprovider.md): An interface for providing a dynamic list of options for a parameter of your app intent.
- [Resolvers](resolvers.md): Resolve the parameters of your app intents, and extend the standard resolution types to include your app’s custom types.
