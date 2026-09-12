> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/lateraljitter](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/lateraljitter)

# lateralJitter (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The amount of lateral particle jitter at the stroke edge for supported inks.

## Declaration

```swift
var lateralJitter: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

Lateral jitter applies only to some inks, such as `PKInkIdentifierPencil`.

# lateralJitter (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The amount of lateral particle jitter at the stroke edge for supported inks.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat lateralJitter;
```

<a id="discussion"></a>

## Discussion

Lateral jitter applies only to some inks, such as `PKInkIdentifierPencil`.
