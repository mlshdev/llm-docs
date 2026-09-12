> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_set_axis_value](https://developer.apple.com/documentation/hvf/hvf_set_axis_value)

# HVF_set_axis_value

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Set the axis value.

## Declaration

```objectivec
int HVF_set_axis_value(HVFPartRenderer *renderer, int axis, HVFAxisValue value);
```

<a id="discussion"></a>

## Discussion

The value is in design space, \[-1.0, 1.0\]) for the indicated global axis, using the same axis numbering as would be in the `fvar` table.

The return value is 0 for success, nonzero for failure.
