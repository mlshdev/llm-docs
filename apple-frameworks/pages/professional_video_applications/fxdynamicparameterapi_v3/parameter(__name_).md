> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxdynamicparameterapi_v3/parameter(_:name:)](https://developer.apple.com/documentation/professional_video_applications/fxdynamicparameterapi_v3/parameter(_:name:))

# parameter(\_:name:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Get a parameter’s name.

## Declaration

```swift
func parameter(_ parameterID: UInt32, name parameterName: AutoreleasingUnsafeMutablePointer<NSString?>!) -> (any Error)!
```

## See Also

### Instance Methods

- [parameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameterCount()](parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [parameterID(at:)](parameterid%28at_%29.md): Returns the ID of the parameter at the given index.
- [removeParameter(\_:)](removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAt(\_:)](setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter(\_:name:)](setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter(\_:entries:defaultValue:)](setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.

# parameter:name: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Get a parameter’s name.

## Declaration

```objectivec
- (NSError *) parameter:(UInt32) parameterID name:(NSString * *) parameterName;
```

## See Also

### Instance Methods

- [parameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameterCount](parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [parameterIDAtIndex:](parameterid%28at_%29.md): Returns the ID of the parameter at the given index.
- [removeParameter:](removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAtTime:withError:](setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter:name:](setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter:entries:defaultValue:](setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.
