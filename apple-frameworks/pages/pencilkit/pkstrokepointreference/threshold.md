> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/threshold](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/threshold)

# threshold (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The alpha threshold for clipping the stroke rendering for supported inks.

## Declaration

```swift
var threshold: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

Only pixels with an alpha greater than the threshold are drawn. A threshold of `0` has no effect on rendering; a threshold of `1` draws nothing. Thresholds apply only to some inks, such as `PKInkIdentifierReed`.

# threshold (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The alpha threshold for clipping the stroke rendering for supported inks.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat threshold;
```

<a id="discussion"></a>

## Discussion

Only pixels with an alpha greater than the threshold are drawn. A threshold of `0` has no effect on rendering; a threshold of `1` draws nothing. Thresholds apply only to some inks, such as `PKInkIdentifierReed`.
