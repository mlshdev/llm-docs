> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mathsettingscalculator_programmermodeobject](https://developer.apple.com/documentation/devicemanagement/mathsettingscalculator_programmermodeobject)

# MathSettingsCalculator_ProgrammerModeObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 15.0+

If present, configures the programmer mode of the calculator. If not present, programmer mode is enabled.

## Declaration

```
object MathSettingsCalculator_ProgrammerModeObject
```

## Properties

- `Enabled` — `boolean` (required): Controls whether the mode is enabled.
  **Default:** `true`

## See Also

### Objects

- [MathSettingsCalculator_BasicModeObject](mathsettingscalculator_basicmodeobject.md): If present, configures the basic mode of the calculator. Basic mode is always enabled.
- [MathSettingsCalculator_InputModesObject](mathsettingscalculator_inputmodesobject.md): If present, controls global input options of the calculator. If not present, all input modes are enabled.
- [MathSettingsCalculator_MathNotesModeObject](mathsettingscalculator_mathnotesmodeobject.md): If present, configures the Math Notes mode of the calculator. If not present, Math Notes mode is enabled.
- [MathSettingsCalculator_ScientificModeObject](mathsettingscalculator_scientificmodeobject.md): If present, configures the scientific mode of the calculator. If not present, scientific mode is enabled.
