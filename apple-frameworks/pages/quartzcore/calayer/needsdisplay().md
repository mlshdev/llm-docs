> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/needsdisplay()](https://developer.apple.com/documentation/quartzcore/calayer/needsdisplay())

# needsDisplay() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer has been marked as needing an update.

## Declaration

```swift
func needsDisplay() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer needs to be updated.

## See Also

### Updating layer display

- [setNeedsDisplay()](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded()](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay(forKey:)](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

# needsDisplay (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer has been marked as needing an update.

## Declaration

```objectivec
- (BOOL) needsDisplay;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer needs to be updated.

## See Also

### Updating layer display

- [setNeedsDisplay](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplayForKey:](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.
