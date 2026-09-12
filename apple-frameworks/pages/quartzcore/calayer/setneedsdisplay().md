> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/setneedsdisplay()](https://developer.apple.com/documentation/quartzcore/calayer/setneedsdisplay())

# setNeedsDisplay() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Marks the layer’s contents as needing to be updated.

## Declaration

```swift
func setNeedsDisplay()
```

<a id="Discussion"></a>

## Discussion

Calling this method causes the layer to recache its content. This results in the layer potentially calling either the [display(\_:)](../calayerdelegate/display%28__%29.md) or [draw(\_:in:)](../calayerdelegate/draw%28__in_%29.md) method of its delegate. The existing content in the layer’s [contents](contents.md) property is removed to make way for the new content.

## See Also

### Updating layer display

- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded()](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay()](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplay(forKey:)](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

# setNeedsDisplay (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Marks the layer’s contents as needing to be updated.

## Declaration

```objectivec
- (void) setNeedsDisplay;
```

<a id="Discussion"></a>

## Discussion

Calling this method causes the layer to recache its content. This results in the layer potentially calling either the [displayLayer:](../calayerdelegate/display%28__%29.md) or [drawLayer:inContext:](../calayerdelegate/draw%28__in_%29.md) method of its delegate. The existing content in the layer’s [contents](contents.md) property is removed to make way for the new content.

## See Also

### Updating layer display

- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplayForKey:](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.
