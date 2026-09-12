> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mathsettingssystembehaviorobject](https://developer.apple.com/documentation/devicemanagement/mathsettingssystembehaviorobject)

# MathSettingsSystemBehaviorObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

If present, configures math behavior in the system.

## Declaration

```
object MathSettingsSystemBehaviorObject
```

## Properties

- `KeyboardSuggestions` — `boolean` (required): Controls whether keyboard suggestions include math solutions. This key is also supported by the keyboard.settings configuration.
  **Default:** `true`
- `MathNotes` — `boolean` (required): Controls whether Math Notes is allowed in other apps such as Notes.
  **Default:** `true`

## See Also

### Objects

- [MathSettingsCalculatorObject](mathsettingscalculatorobject.md): If present, configures the built-in Calculator app.
