> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/class(forcustomparameterid:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/class(forcustomparameterid:))

# class(forCustomParameterID:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns the class of the object contained in the custom parameter with the given ID.

## Declaration

```swift
optional func `class`(forCustomParameterID parameterID: UInt32) -> AnyClass
```

## Parameters

- `parameterID`: The parameter ID of the class to be determined.

<a id="return-value"></a>

## Return Value

An Objective-C class of the specified parameterID.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

<a id="discussion"></a>

## Discussion

When you make custom parameters and the host stores them for you, it needs to know the class of the parameters to unarchive them from disk. This method returns the Objective-C class of which they are members.

## See Also

### Adding and setting parameters

- [addParameters()](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [classes(forCustomParameterID:)](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged(\_:at:)](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.

# classForCustomParameterID: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the class of the object contained in the custom parameter with the given ID.

## Declaration

```objectivec
- (Class) classForCustomParameterID:(UInt32) parameterID;
```

## Parameters

- `parameterID`: The parameter ID of the class to be determined.

<a id="return-value"></a>

## Return Value

An Objective-C class of the specified parameterID.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)

<a id="discussion"></a>

## Discussion

When you make custom parameters and the host stores them for you, it needs to know the class of the parameters to unarchive them from disk. This method returns the Objective-C class of which they are members.

## See Also

### Adding and setting parameters

- [addParametersWithError:](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [classesForCustomParameterID:](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged:atTime:error:](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.
