> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/classes(forcustomparameterid:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/classes(forcustomparameterid:))

# classes(forCustomParameterID:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.1+

Returns the classes of the objects contained in the custom parameter with the given ID.

## Declaration

```swift
optional func classes(forCustomParameterID parameterID: UInt32) -> Set<AnyHashable>
```

## Parameters

- `parameterID`: The parameter ID of the classes to be determined.

<a id="return-value"></a>

## Return Value

An NSSet of classes of the specified parameter ID.

<a id="discussion"></a>

## Discussion

When you make custom parameters, the host needs to know the classes of the parameters to store and unarchive them from disk. This method returns the Objective-C set of classes that the parameters are members of.

## See Also

### Adding and setting parameters

- [addParameters()](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [class(forCustomParameterID:)](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [parameterChanged(\_:at:)](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.

# classesForCustomParameterID: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the classes of the objects contained in the custom parameter with the given ID.

## Declaration

```objectivec
- (NSSet<Class> *) classesForCustomParameterID:(UInt32) parameterID;
```

## Parameters

- `parameterID`: The parameter ID of the classes to be determined.

<a id="return-value"></a>

## Return Value

An NSSet of classes of the specified parameter ID.

<a id="discussion"></a>

## Discussion

When you make custom parameters, the host needs to know the classes of the parameters to store and unarchive them from disk. This method returns the Objective-C set of classes that the parameters are members of.

## See Also

### Adding and setting parameters

- [addParametersWithError:](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [classForCustomParameterID:](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [parameterChanged:atTime:error:](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.
