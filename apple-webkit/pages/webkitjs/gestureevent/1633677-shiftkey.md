> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/gestureevent/1633677-shiftkey](https://developer.apple.com/documentation/webkitjs/gestureevent/1633677-shiftkey)

# shiftKey

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.1+ · Safari Mobile 2.0+

A Boolean value indicating whether the shift key is pressed.

## Declaration

```
readonly attribute boolean shiftKey;
```

<a id="discussion"></a>

## Discussion

If `true`, the Shift key is pressed; otherwise, it is not. If there is no keyboard, this value is `false`.

## See Also

### Accessing Properties

- [altKey](1630971-altkey.md): A Boolean value indicating whether the alt key is pressed.
- [ctrlKey](1629639-ctrlkey.md): A Boolean value indicating whether the control key is pressed.
- [metaKey](1630762-metakey.md): A Boolean value indicating whether the meta key is pressed.
- [rotation](1633278-rotation.md): The delta rotation since the start of an event, in degrees, where clockwise is positive and counter-clockwise is negative.
- [scale](1632653-scale.md): The distance between two fingers since the start of an event, as a multiplier of the initial distance.
- [target](1632473-target.md): The target of this gesture.
