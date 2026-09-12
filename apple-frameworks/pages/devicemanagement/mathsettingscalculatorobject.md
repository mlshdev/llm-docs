> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mathsettingscalculatorobject](https://developer.apple.com/documentation/devicemanagement/mathsettingscalculatorobject)

# MathSettingsCalculatorObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

If present, configures the built-in Calculator app.

## Declaration

```
object MathSettingsCalculatorObject
```

## Properties

- `BasicMode` — `MathSettingsCalculator_BasicModeObject`: If present, configures the basic mode of the calculator. Basic mode is always enabled.
- `InputModes` — `MathSettingsCalculator_InputModesObject`: If present, controls global input options of the calculator. If not present, all input modes are enabled.
- `MathNotesMode` — `MathSettingsCalculator_MathNotesModeObject`: If present, configures the Math Notes mode of the calculator. If not present, Math Notes mode is enabled.
- `ProgrammerMode` — `MathSettingsCalculator_ProgrammerModeObject`: If present, configures the programmer mode of the calculator. If not present, programmer mode is enabled.

  Available: macOS 15+
- `ScientificMode` — `MathSettingsCalculator_ScientificModeObject`: If present, configures the scientific mode of the calculator. If not present, scientific mode is enabled.

## Topics

### Objects

- [MathSettingsCalculator_BasicModeObject](mathsettingscalculator_basicmodeobject.md): If present, configures the basic mode of the calculator. Basic mode is always enabled.
- [MathSettingsCalculator_InputModesObject](mathsettingscalculator_inputmodesobject.md): If present, controls global input options of the calculator. If not present, all input modes are enabled.
- [MathSettingsCalculator_MathNotesModeObject](mathsettingscalculator_mathnotesmodeobject.md): If present, configures the Math Notes mode of the calculator. If not present, Math Notes mode is enabled.
- [MathSettingsCalculator_ProgrammerModeObject](mathsettingscalculator_programmermodeobject.md): If present, configures the programmer mode of the calculator. If not present, programmer mode is enabled.
- [MathSettingsCalculator_ScientificModeObject](mathsettingscalculator_scientificmodeobject.md): If present, configures the scientific mode of the calculator. If not present, scientific mode is enabled.

## See Also

### Objects

- [MathSettingsSystemBehaviorObject](mathsettingssystembehaviorobject.md): If present, configures math behavior in the system.
