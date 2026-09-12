> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/withsystemeffect(_:)](https://developer.apple.com/documentation/appkit/nscolor/withsystemeffect(_:))

# withSystemEffect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Returns a new color object that represents the current color modified to include the specified visual effect.

## Declaration

```swift
func withSystemEffect(_ systemEffect: NSColor.SystemEffect) -> NSColor
```

## Parameters

- `systemEffect`: The visual effect you want to apply to a view or control.

<a id="Discussion"></a>

## Discussion

Instead of defining separate colors for user interactions with a view, use this method to retrieve the appropriate color for use with those interactions. This method blends the current color with an appropriate modifier and returns the results. For example, specifying [NSColor.SystemEffect.pressed](systemeffect/pressed.md) for the `systemEffect` parameter yields the color to use when you want your view to appear as if it had been pressed. This method takes the current appearance into account, returning an appropriately modified color for both light and dark appearances.

## See Also

### Applying specific appearances to colors

- [NSColor.SystemEffect](systemeffect.md): Constants for user interactions that change the appearance of a view or control.

# colorWithSystemEffect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Returns a new color object that represents the current color modified to include the specified visual effect.

## Declaration

```objectivec
- (NSColor *) colorWithSystemEffect:(NSColorSystemEffect) systemEffect;
```

## Parameters

- `systemEffect`: The visual effect you want to apply to a view or control.

<a id="Discussion"></a>

## Discussion

Instead of defining separate colors for user interactions with a view, use this method to retrieve the appropriate color for use with those interactions. This method blends the current color with an appropriate modifier and returns the results. For example, specifying [NSColorSystemEffectPressed](systemeffect/pressed.md) for the `systemEffect` parameter yields the color to use when you want your view to appear as if it had been pressed. This method takes the current appearance into account, returning an appropriately modified color for both light and dark appearances.

## See Also

### Applying specific appearances to colors

- [NSColorSystemEffect](systemeffect.md): Constants for user interactions that change the appearance of a view or control.
