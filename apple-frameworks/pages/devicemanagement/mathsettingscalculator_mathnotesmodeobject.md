> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mathsettingscalculator_mathnotesmodeobject](https://developer.apple.com/documentation/devicemanagement/mathsettingscalculator_mathnotesmodeobject)

# MathSettingsCalculator_MathNotesModeObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

If present, configures the Math Notes mode of the calculator. If not present, Math Notes mode is enabled.

## Declaration

```
object MathSettingsCalculator_MathNotesModeObject
```

## Properties

- `Enabled` — `boolean` (required): Controls whether the mode is enabled.
  **Default:** `true`

## See Also

### Objects

- [MathSettingsCalculator_BasicModeObject](mathsettingscalculator_basicmodeobject.md): If present, configures the basic mode of the calculator. Basic mode is always enabled.
- [MathSettingsCalculator_InputModesObject](mathsettingscalculator_inputmodesobject.md): If present, controls global input options of the calculator. If not present, all input modes are enabled.
- [MathSettingsCalculator_ProgrammerModeObject](mathsettingscalculator_programmermodeobject.md): If present, configures the programmer mode of the calculator. If not present, programmer mode is enabled.
- [MathSettingsCalculator_ScientificModeObject](mathsettingscalculator_scientificmodeobject.md): If present, configures the scientific mode of the calculator. If not present, scientific mode is enabled.
