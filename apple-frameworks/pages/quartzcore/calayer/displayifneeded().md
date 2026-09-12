> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/displayifneeded()](https://developer.apple.com/documentation/quartzcore/calayer/displayifneeded())

# displayIfNeeded() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Initiates the update process for a layer if it is currently marked as needing an update.

## Declaration

```swift
func displayIfNeeded()
```

<a id="Discussion"></a>

## Discussion

You can call this method as needed to force an update to your layer’s contents outside of the normal update cycle. Doing so is generally not needed, though. The preferred way to update a layer is to call [setNeedsDisplay()](setneedsdisplay%28%29.md) and let the system update the layer during the next cycle.

## See Also

### Updating layer display

- [setNeedsDisplay()](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [needsDisplay()](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplay(forKey:)](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

# displayIfNeeded (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Initiates the update process for a layer if it is currently marked as needing an update.

## Declaration

```objectivec
- (void) displayIfNeeded;
```

<a id="Discussion"></a>

## Discussion

You can call this method as needed to force an update to your layer’s contents outside of the normal update cycle. Doing so is generally not needed, though. The preferred way to update a layer is to call [setNeedsDisplay](setneedsdisplay%28%29.md) and let the system update the layer during the next cycle.

## See Also

### Updating layer display

- [setNeedsDisplay](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [needsDisplay](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplayForKey:](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.
