> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setaction(_:forsegmentat:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setaction(_:forsegmentat:))

# setAction(\_:forSegmentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the action for the segment at the index you specify.

## Declaration

```swift
func setAction(_ action: UIAction, forSegmentAt segment: Int)
```

## Parameters

- `action`: A [UIAction](../uiaction.md) object to set on the segment at the index you specify.
- `segment`: An integer index of a segment.

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [valueChanged](../uicontrol/event/valuechanged.md) and [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

> **Note**

>  This method asserts an error if the action’s [UIAction.Identifier](../uiaction/identifier-swift.struct.md) doesn’t match the action of the existing segment at this index, or isn’t unique within all actions associated with the segmented control.

## See Also

### Managing segment actions

- [actionForSegment(at:)](actionforsegment%28at_%29.md): Fetches the action of the segment at the index you specify, if one exists.

# setAction:forSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the action for the segment at the index you specify.

## Declaration

```objectivec
- (void) setAction:(UIAction *) action forSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `action`: A [UIAction](../uiaction.md) object to set on the segment at the index you specify.
- `segment`: An integer index of a segment.

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [UIControlEventValueChanged](../uicontrol/event/valuechanged.md) and [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

> **Note**

>  This method asserts an error if the action’s [UIActionIdentifier](../uiaction/identifier-swift.struct.md) doesn’t match the action of the existing segment at this index, or isn’t unique within all actions associated with the segmented control.

## See Also

### Managing segment actions

- [actionForSegmentAtIndex:](actionforsegment%28at_%29.md): Fetches the action of the segment at the index you specify, if one exists.
