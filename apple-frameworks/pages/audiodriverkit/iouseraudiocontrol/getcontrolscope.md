> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocontrol/getcontrolscope](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocontrol/getcontrolscope)

# GetControlScope

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the control’s scope: input, output, global, or play-through.

## Declaration

```objectivec
IOUserAudioObjectPropertyScope GetControlScope();
```

<a id="return-value"></a>

## Return Value

The control’s scope.

## See Also

### Working with Control Properties

- [IOUserAudioObjectPropertyScope](../audiodriverkit/iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
- [GetControlElement](getcontrolelement.md): Returns the control’s identifying element.
- [IOUserAudioObjectPropertyElement](../audiodriverkit/iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [IOUserAudioObjectPropertyElementMain](../audiodriverkit/iouseraudioobjectpropertyelementmain.md): The identifier for an audio object’s main element.
- [GetIsSettable](getissettable.md): Returns a Boolean value that idicates if the control can be set.
