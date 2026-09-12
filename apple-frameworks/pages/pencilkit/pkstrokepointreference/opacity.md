> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/opacity](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/opacity)

# opacity (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Opacity of the point.

## Declaration

```swift
var opacity: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The opacity of a [PKStrokePointReference](../pkstrokepointreference.md) has a range of 0-2, which is a multiplier of the ink opacity.

## See Also

### Getting the point’s drawing data

- [size](size.md): The size of the point.
- [secondaryScale](secondaryscale.md)

# opacity (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Opacity of the point.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat opacity;
```

<a id="Discussion"></a>

## Discussion

The opacity of a [PKStrokePoint](../pkstrokepointreference.md) has a range of 0-2, which is a multiplier of the ink opacity.

## See Also

### Getting the point’s drawing data

- [size](size.md): The size of the point.
- [secondaryScale](secondaryscale.md)
