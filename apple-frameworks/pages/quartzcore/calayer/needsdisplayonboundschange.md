> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/needsdisplayonboundschange](https://developer.apple.com/documentation/quartzcore/calayer/needsdisplayonboundschange)

# needsDisplayOnBoundsChange (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.

## Declaration

```swift
var needsDisplayOnBoundsChange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layer automatically calls its [setNeedsDisplay()](setneedsdisplay%28%29.md) method whenever its [bounds](bounds.md) property changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Updating layer display

- [setNeedsDisplay()](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [displayIfNeeded()](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay()](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplay(forKey:)](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

# needsDisplayOnBoundsChange (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.

## Declaration

```objectivec
@property BOOL needsDisplayOnBoundsChange;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layer automatically calls its [setNeedsDisplay](setneedsdisplay%28%29.md) method whenever its [bounds](bounds.md) property changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Updating layer display

- [setNeedsDisplay](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [displayIfNeeded](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
- [needsDisplayForKey:](needsdisplay%28forkey_%29.md): Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.
