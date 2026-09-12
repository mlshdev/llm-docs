> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/actionforsegment(at:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/actionforsegment(at:))

# actionForSegment(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Fetches the action of the segment at the index you specify, if one exists.

## Declaration

```swift
func actionForSegment(at segment: Int) -> UIAction?
```

## Parameters

- `segment`: An integer value index of a segment.

<a id="return-value"></a>

## Return Value

The [UIAction](../uiaction.md) for the segment at the index you specify, or `nil` if the segment doesn’t have an action assigned.

## See Also

### Managing segment actions

- [setAction(\_:forSegmentAt:)](setaction%28__forsegmentat_%29.md): Sets the action for the segment at the index you specify.

# actionForSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Fetches the action of the segment at the index you specify, if one exists.

## Declaration

```objectivec
- (UIAction *) actionForSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `segment`: An integer value index of a segment.

<a id="return-value"></a>

## Return Value

The [UIAction](../uiaction.md) for the segment at the index you specify, or `nil` if the segment doesn’t have an action assigned.

## See Also

### Managing segment actions

- [setAction:forSegmentAtIndex:](setaction%28__forsegmentat_%29.md): Sets the action for the segment at the index you specify.
