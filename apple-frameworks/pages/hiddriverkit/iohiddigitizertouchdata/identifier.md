> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohiddigitizertouchdata/identifier](https://developer.apple.com/documentation/hiddriverkit/iohiddigitizertouchdata/identifier)

# identifier

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit · macOS

A unique contact identifier.

## Declaration

```objectivec
uint32_t identifier;
```

## See Also

### Getting the Touch Data

- [x](x.md): An x-coordinate value in the range `0.0` to `1.0`.
- [y](y.md): A y-coordinate value in the range `0.0` to `1.0`.
- [inRange](inrange.md): A single-bit Boolean that indicates whether the finger is in range.
- [touch](touch.md): A single-bit Boolean that indicates whether the finger is in contact with the surface of the digitizer.
- [touchValid](touchvalid.md): A single-bit Boolean that indicates whether the touch contact was intended.
- [touchChanged](touchchanged.md): A single-bit Boolean that indicates whether the touch variable changed since the last event was dispatched.
- [positionChanged](positionchanged.md): A single-bit Boolean that indicates whether the x or y position changed since the last event was dispatched.
- [rangeChanged](rangechanged.md): A single-bit Boolean that indicates whether the range variable changed since the last event was dispatched.
