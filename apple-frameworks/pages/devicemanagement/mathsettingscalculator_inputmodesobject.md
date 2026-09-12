> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mathsettingscalculator_inputmodesobject](https://developer.apple.com/documentation/devicemanagement/mathsettingscalculator_inputmodesobject)

# MathSettingsCalculator_InputModesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

If present, controls global input options of the calculator. If not present, all input modes are enabled.

## Declaration

```
object MathSettingsCalculator_InputModesObject
```

## Properties

- `RPN` — `boolean` (required): Configures whether RPN input is enabled.

  Available: macOS 15+  
  **Default:** `true`
- `UnitConversion` — `boolean` (required): Configures whether unit conversions are enabled.
  **Default:** `true`

## See Also

### Objects

- [MathSettingsCalculator_BasicModeObject](mathsettingscalculator_basicmodeobject.md): If present, configures the basic mode of the calculator. Basic mode is always enabled.
- [MathSettingsCalculator_MathNotesModeObject](mathsettingscalculator_mathnotesmodeobject.md): If present, configures the Math Notes mode of the calculator. If not present, Math Notes mode is enabled.
- [MathSettingsCalculator_ProgrammerModeObject](mathsettingscalculator_programmermodeobject.md): If present, configures the programmer mode of the calculator. If not present, programmer mode is enabled.
- [MathSettingsCalculator_ScientificModeObject](mathsettingscalculator_scientificmodeobject.md): If present, configures the scientific mode of the calculator. If not present, scientific mode is enabled.
