> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiolevelcontrolrange](https://developer.apple.com/documentation/audiodriverkit/iouseraudiolevelcontrolrange)

# IOUserAudioLevelControlRange

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 21.0+

A type that indicates minimum and maximum values for level controls.

## Declaration

```objectivec
struct IOUserAudioLevelControlRange;
```

## Topics

### Accessing the Minimum and Maximum

- [m_min](iouseraudiolevelcontrolrange/m_min.md): The minimum value of the range.
- [m_max](iouseraudiolevelcontrolrange/m_max.md): The maximum value of the range.

## See Also

### Creating a Level Control

- [Create](iouseraudiolevelcontrol/create.md): Allocates and initializes an instance of the level control class.
- [init](iouseraudiolevelcontrol/init.md): Initializes an instance of a level control.
- [IOUserAudioDriver](iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
- [IOUserAudioObjectPropertyElement](audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyScope](audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
