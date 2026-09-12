> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyelementmain](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyelementmain)

# IOUserAudioObjectPropertyElementMain

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 21.0+

The identifier for an audio object’s main element.

## Declaration

```objectivec
constexpr const IOUserAudioObjectPropertyElement IOUserAudioObjectPropertyElementMain;
```

<a id="Discussion"></a>

## Discussion

The main element has the value `0`.

## See Also

### Working with Control Properties

- [GetControlScope](../iouseraudiocontrol/getcontrolscope.md): Returns the control’s scope: input, output, global, or play-through.
- [IOUserAudioObjectPropertyScope](iouseraudioobjectpropertyscope.md): A four character code which, along with the selector and element, identify a specific piece of information about an audio object.
- [GetControlElement](../iouseraudiocontrol/getcontrolelement.md): Returns the control’s identifying element.
- [IOUserAudioObjectPropertyElement](iouseraudioobjectpropertyelement.md): A four character code which, along with the selector and scope, identify a specific piece of information about an audio object.
- [GetIsSettable](../iouseraudiocontrol/getissettable.md): Returns a Boolean value that idicates if the control can be set.
