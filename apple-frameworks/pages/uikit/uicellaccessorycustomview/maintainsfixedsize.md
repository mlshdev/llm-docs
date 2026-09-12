> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessorycustomview/maintainsfixedsize](https://developer.apple.com/documentation/uikit/uicellaccessorycustomview/maintainsfixedsize)

# maintainsFixedSize

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether to preserve the frame size of the custom view.

## Declaration

```objectivec
@property (nonatomic) BOOL maintainsFixedSize;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system preserves the current frame size of the view. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the system sizes the view during layout of the accessories.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Configuration Options

- [customView](customview.md): The custom view to display for the accessory.
- [placement](placement.md): The placement for the accessory.
- [position](position.md): The index position of the cell accessory in relation to the other accessories in the accessories array.
