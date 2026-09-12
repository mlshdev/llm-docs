> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/segmentcount](https://developer.apple.com/documentation/appkit/nssegmentedcell/segmentcount)

# segmentCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of segments in the segmented control.

## Declaration

```swift
var segmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the number of segments the segmented control should have. If this value is less than the number of segments currently in the control, segments are removed from the right of the control. Similarly, if the number is greater than the current number of segments, the new segments are added on the right. This value must be between `0` and `2049`.

## See Also

### Related Documentation

- [Segmented Control Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SegmentedControl/SegmentedControl.html#//apple_ref/doc/uid/10000182i)

# segmentCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of segments in the segmented control.

## Declaration

```objectivec
@property NSInteger segmentCount;
```

<a id="Discussion"></a>

## Discussion

This property contains the number of segments the segmented control should have. If this value is less than the number of segments currently in the control, segments are removed from the right of the control. Similarly, if the number is greater than the current number of segments, the new segments are added on the right. This value must be between `0` and `2049`.

## See Also

### Related Documentation

- [Segmented Control Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SegmentedControl/SegmentedControl.html#//apple_ref/doc/uid/10000182i)
