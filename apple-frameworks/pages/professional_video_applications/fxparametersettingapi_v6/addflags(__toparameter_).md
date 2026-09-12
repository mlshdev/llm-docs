> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v6/addflags(_:toparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v6/addflags(_:toparameter:))

# addFlags(\_:toParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.2+

Add new parameter flags to the current flags for a parameter.

## Declaration

```swift
func addFlags(_ flags: FxParameterFlags, toParameter parameterID: UInt32) -> Bool
```

## Parameters

- `flags`: The flags to add.
- `parameterID`: The ID of the parameter whose flags this method appends.

<a id="return-value"></a>

## Return Value

Returns `YES` if the method successfully adds the flags; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Use this method to set one or more parameter flags without changing the value of other flags.

## See Also

### Instance Methods

- [removeFlags(\_:fromParameter:)](removeflags%28__fromparameter_%29.md): Remove parameter flags from the current flags for a parameter.

# addFlags:toParameter: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Add new parameter flags to the current flags for a parameter.

## Declaration

```objectivec
- (BOOL) addFlags:(FxParameterFlags) flags toParameter:(UInt32) parameterID;
```

## Parameters

- `flags`: The flags to add.
- `parameterID`: The ID of the parameter whose flags this method appends.

<a id="return-value"></a>

## Return Value

Returns `YES` if the method successfully adds the flags; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Use this method to set one or more parameter flags without changing the value of other flags.

## See Also

### Instance Methods

- [removeFlags:fromParameter:](removeflags%28__fromparameter_%29.md): Remove parameter flags from the current flags for a parameter.
