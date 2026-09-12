> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideocontrol/getcontrolelement](https://developer.apple.com/documentation/videodriverkit/iouservideocontrol/getcontrolelement)

# GetControlElement

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Returns an object property element for the control.

## Declaration

```objectivec
IOUserVideoObjectPropertyElement GetControlElement();
```

## See Also

### Working with control properties

- [GetControlScope](getcontrolscope.md): Returns an object property scope for the control.
- [IOUserVideoObjectPropertyScope](../videodriverkit/iouservideoobjectpropertyscope.md): A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
- [IOUserVideoObjectPropertyElement](../videodriverkit/iouservideoobjectpropertyelement.md): An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [GetIsSettable](getissettable.md): Returns a Boolean value indicating if the control value can be set.
