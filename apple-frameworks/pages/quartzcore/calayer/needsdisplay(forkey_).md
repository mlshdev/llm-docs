> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/needsdisplay(forkey:)](https://developer.apple.com/documentation/quartzcore/calayer/needsdisplay(forkey:))

# needsDisplay(forKey:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

## Declaration

```swift
class func needsDisplay(forKey key: String) -> Bool
```

## Parameters

- `key`: A string that specifies an attribute of the layer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer requires a redisplay.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and return [true](https://developer.apple.com/documentation/swift/true) if the layer should be redisplayed when the value of the specified attribute changes. Animations changing the value of the attribute also trigger redisplay.

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [defaultAction(forKey:)](defaultaction%28forkey_%29.md): Returns the default action for the current class.
- [defaultValue(forKey:)](defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.

### Updating layer display

- [setNeedsDisplay()](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded()](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay()](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.

# needsDisplayForKey: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether changes to the specified key require the layer to be redisplayed.

## Declaration

```objectivec
+ (BOOL) needsDisplayForKey:(NSString *) key;
```

## Parameters

- `key`: A string that specifies an attribute of the layer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer requires a redisplay.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method and return [true](https://developer.apple.com/documentation/swift/true) if the layer should be redisplayed when the value of the specified attribute changes. Animations changing the value of the attribute also trigger redisplay.

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [defaultActionForKey:](defaultaction%28forkey_%29.md): Returns the default action for the current class.
- [defaultValueForKey:](defaultvalue%28forkey_%29.md): Specifies the default value associated with the specified key.

### Updating layer display

- [setNeedsDisplay](setneedsdisplay%28%29.md): Marks the layer’s contents as needing to be updated.
- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region within the specified rectangle as needing to be updated.
- [needsDisplayOnBoundsChange](needsdisplayonboundschange.md): A Boolean indicating whether the layer contents must be updated when its bounds rectangle changes.
- [displayIfNeeded](displayifneeded%28%29.md): Initiates the update process for a layer if it is currently marked as needing an update.
- [needsDisplay](needsdisplay%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing an update.
