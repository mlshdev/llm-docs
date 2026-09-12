> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/devicemotionevent/1634377-rotationrate](https://developer.apple.com/documentation/webkitjs/devicemotionevent/1634377-rotationrate)

# rotationRate

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Mobile 4.2+

The rotation rate of the device.

## Declaration

```
readonly attribute RotationRate rotationRate;
```

<a id="discussion"></a>

## Discussion

The `RotationRate` object specifies the device’s rate of rotation around three axes. It contains `alpha`, `beta`, and `gamma` properties represented as doubles as described in [DeviceOrientationEvent](../deviceorientationevent.md).

This property is `null` if the device cannot provide the rate of rotation—that is, if the device does not have a gyroscope.

## See Also

### Getting Motion Event Properties

- [acceleration](1629483-acceleration.md): The acceleration that the user is giving to the device.
- [accelerationIncludingGravity](1629110-accelerationincludinggravity.md): The total acceleration of the device, which includes the user acceleration and the gravity.
- [interval](1632148-interval.md): The interval in milliseconds since the last device motion event.
