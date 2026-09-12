> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxdynamicparameterapi_v3/parameterid(at:)](https://developer.apple.com/documentation/professional_video_applications/fxdynamicparameterapi_v3/parameterid(at:))

# parameterID(at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the ID of the parameter at the given index.

## Declaration

```swift
func parameterID(at index: UInt32) -> UInt32
```

## Parameters

- `index`: The 0-based index of the parameter whose ID you wish to get.

<a id="discussion"></a>

## Discussion

During `-addParameters:` your plugin tells the host to create parameters. Later, while running, your plugin can create new parameters using the FxParameterCreationAPI (just like in `-addParameters`), or it can remove them using the `-removeParameter:` method of this protocol. Each parameter must have a unique ID within the plugin. This method allows you to retrieve the ID of a parameter at a given index in the list of parameters. The IDs need not be sequential or even increasing. You could for example have the following:

| Index | ID | Parameter |
| --- | --- | --- |
| `0` | `1` | `slider` |
| `1` | `1000` | `checkbox` |
| `2` | `10` | `popup menu` |

## See Also

### Instance Methods

- [parameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameter(\_:name:)](parameter%28__name_%29.md): Get a parameter’s name.
- [parameterCount()](parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [removeParameter(\_:)](removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAt(\_:)](setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter(\_:floatMinimum:maximum:sliderMinimum:sliderMaximum:)](setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter(\_:intMinimum:maximum:sliderMinimum:sliderMaximum:)](setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter(\_:name:)](setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter(\_:entries:defaultValue:)](setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.

# parameterIDAtIndex: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the ID of the parameter at the given index.

## Declaration

```objectivec
- (UInt32) parameterIDAtIndex:(UInt32) index;
```

## Parameters

- `index`: The 0-based index of the parameter whose ID you wish to get.

<a id="discussion"></a>

## Discussion

During `-addParameters:` your plugin tells the host to create parameters. Later, while running, your plugin can create new parameters using the FxParameterCreationAPI (just like in `-addParameters`), or it can remove them using the `-removeParameter:` method of this protocol. Each parameter must have a unique ID within the plugin. This method allows you to retrieve the ID of a parameter at a given index in the list of parameters. The IDs need not be sequential or even increasing. You could for example have the following:

| Index | ID | Parameter |
| --- | --- | --- |
| `0` | `1` | `slider` |
| `1` | `1000` | `checkbox` |
| `2` | `10` | `popup menu` |

## See Also

### Instance Methods

- [parameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](parameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as floating point values.
- [parameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](parameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Get a parameter’s bounds as integer values.
- [parameter:name:](parameter%28__name_%29.md): Get a parameter’s name.
- [parameterCount](parametercount%28%29.md): Returns the number of parameters your plug-in currently has.
- [removeParameter:](removeparameter%28__%29.md): Removes the parameter with the passed-in ID.
- [setAsDefaultsAtTime:withError:](setasdefaultsat%28__%29.md): Tell the host app that the settings at the given time should be considered the default settings for every parameter in the plug-in.
- [setParameter:floatMinimum:maximum:sliderMinimum:sliderMaximum:](setparameter%28__floatminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using floating point values.
- [setParameter:intMinimum:maximum:sliderMinimum:sliderMaximum:](setparameter%28__intminimum_maximum_sliderminimum_slidermaximum_%29.md): Set a parameter’s bounds using integer values.
- [setParameter:name:](setparameter%28__name_%29.md): Set a parameter with a name.
- [setPopupMenuParameter:entries:defaultValue:](setpopupmenuparameter%28__entries_defaultvalue_%29.md): Set the menu entries in a pop-up menu.
