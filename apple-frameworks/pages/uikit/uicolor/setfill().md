> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/setfill()](https://developer.apple.com/documentation/uikit/uicolor/setfill())

# setFill() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the color of subsequent fill operations to the color that the receiver represents.

## Declaration

```swift
func setFill()
```

<a id="Discussion"></a>

## Discussion

If you subclass `UIColor`, you must implement this method in your subclass. Your custom implementation should modify the fill color in the current graphics context by setting it to the color represented by the receiver.

## See Also

### Applying the color to the drawing environment

- [Customizing drawings](../customizing-drawings.md): Create custom colors and patterns for drawing in your app.
- [set()](set%28%29.md): Sets the color of subsequent stroke and fill operations to the color that the receiver represents.
- [setStroke()](setstroke%28%29.md): Sets the color of subsequent stroke operations to the color that the receiver represents.

# setFill (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the color of subsequent fill operations to the color that the receiver represents.

## Declaration

```objectivec
- (void) setFill;
```

<a id="Discussion"></a>

## Discussion

If you subclass `UIColor`, you must implement this method in your subclass. Your custom implementation should modify the fill color in the current graphics context by setting it to the color represented by the receiver.

## See Also

### Applying the color to the drawing environment

- [Customizing drawings](../customizing-drawings.md): Create custom colors and patterns for drawing in your app.
- [set](set%28%29.md): Sets the color of subsequent stroke and fill operations to the color that the receiver represents.
- [setStroke](setstroke%28%29.md): Sets the color of subsequent stroke operations to the color that the receiver represents.
