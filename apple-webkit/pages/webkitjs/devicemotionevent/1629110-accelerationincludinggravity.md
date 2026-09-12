> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/devicemotionevent/1629110-accelerationincludinggravity](https://developer.apple.com/documentation/webkitjs/devicemotionevent/1629110-accelerationincludinggravity)

# accelerationIncludingGravity

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Mobile 4.2+

The total acceleration of the device, which includes the user acceleration and the gravity.

## Declaration

```
readonly attribute Acceleration accelerationIncludingGravity;
```

<a id="discussion"></a>

## Discussion

The acceleration data is expressed in m/s^2 and use the `x`, `y`, and `z` axis properties described in [acceleration](1629483-acceleration.md). This property is never `null` because every Apple device has an accelerometer.

Use the [acceleration](1629483-acceleration.md) property to get the user acceleration only.

## See Also

### Getting Motion Event Properties

- [acceleration](1629483-acceleration.md): The acceleration that the user is giving to the device.
- [interval](1632148-interval.md): The interval in milliseconds since the last device motion event.
- [rotationRate](1634377-rotationrate.md): The rotation rate of the device.
