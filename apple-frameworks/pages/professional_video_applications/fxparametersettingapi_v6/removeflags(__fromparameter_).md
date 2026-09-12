> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparametersettingapi_v6/removeflags(_:fromparameter:)](https://developer.apple.com/documentation/professional_video_applications/fxparametersettingapi_v6/removeflags(_:fromparameter:))

# removeFlags(\_:fromParameter:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.2+

Remove parameter flags from the current flags for a parameter.

## Declaration

```swift
func removeFlags(_ flags: FxParameterFlags, fromParameter parameterID: UInt32) -> Bool
```

## Parameters

- `flags`: The flags to remove.
- `parameterID`: The ID of the parameter whose flags this method clears.

<a id="return-value"></a>

## Return Value

Returns `YES` if the method successfully removes the flags; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Use this method to remove one or more parameter flags without changing the value of other flags.

## See Also

### Instance Methods

- [addFlags(\_:toParameter:)](addflags%28__toparameter_%29.md): Add new parameter flags to the current flags for a parameter.

# removeFlags:fromParameter: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Remove parameter flags from the current flags for a parameter.

## Declaration

```objectivec
- (BOOL) removeFlags:(FxParameterFlags) flags fromParameter:(UInt32) parameterID;
```

## Parameters

- `flags`: The flags to remove.
- `parameterID`: The ID of the parameter whose flags this method clears.

<a id="return-value"></a>

## Return Value

Returns `YES` if the method successfully removes the flags; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Use this method to remove one or more parameter flags without changing the value of other flags.

## See Also

### Instance Methods

- [addFlags:toParameter:](addflags%28__toparameter_%29.md): Add new parameter flags to the current flags for a parameter.
