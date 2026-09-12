> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohiddigitizertouchdata/rangechanged](https://developer.apple.com/documentation/hiddriverkit/iohiddigitizertouchdata/rangechanged)

# rangeChanged

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · macOS

A single-bit Boolean that indicates whether the range variable changed since the last event was dispatched.

## Declaration

```objectivec
uint32_t rangeChanged;
```

<a id="Discussion"></a>

## Discussion

For example, this property is `1` if the value in the [inRange](inrange.md) field changed from `0` to `1` since the last event.

## See Also

### Getting the Touch Data

- [identifier](identifier.md): A unique contact identifier.
- [x](x.md): An x-coordinate value in the range `0.0` to `1.0`.
- [y](y.md): A y-coordinate value in the range `0.0` to `1.0`.
- [inRange](inrange.md): A single-bit Boolean that indicates whether the finger is in range.
- [touch](touch.md): A single-bit Boolean that indicates whether the finger is in contact with the surface of the digitizer.
- [touchValid](touchvalid.md): A single-bit Boolean that indicates whether the touch contact was intended.
- [touchChanged](touchchanged.md): A single-bit Boolean that indicates whether the touch variable changed since the last event was dispatched.
- [positionChanged](positionchanged.md): A single-bit Boolean that indicates whether the x or y position changed since the last event was dispatched.
