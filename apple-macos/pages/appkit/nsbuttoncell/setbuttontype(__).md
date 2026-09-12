> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/setbuttontype(_:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/setbuttontype(_:))

# setButtonType(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets how the button highlights while pressed and how it shows its state.

## Declaration

```swift
func setButtonType(_ type: NSButton.ButtonType)
```

## Parameters

- `type`: A constant specifying the type of button. This can be one of the constants defined in [NSButton.ButtonType](../nsbutton/buttontype.md).

<a id="Discussion"></a>

## Discussion

The  [setButtonType(\_:)](setbuttontype%28__%29.md) method redisplays the button before returning.

The types available are for the most common button types, which are also accessible in Interface Builder; you can configure different behavior with the [highlightsBy](highlightsby.md) and [showsStateBy](showsstateby.md) properties.

Note that there is no `-buttonType` method. The set method sets various button properties that together establish the behavior of the type.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [alternateImage](alternateimage.md): The image the button displays in its alternate state.

### Displaying the Cell

- [highlightsBy](highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [showsStateBy](showsstateby.md): The flags that indicate how the button cell shows its alternate state.

# setButtonType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets how the button highlights while pressed and how it shows its state.

## Declaration

```objectivec
- (void) setButtonType:(NSButtonType) type;
```

## Parameters

- `type`: A constant specifying the type of button. This can be one of the constants defined in [NSButtonType](../nsbutton/buttontype.md).

<a id="Discussion"></a>

## Discussion

The  [setButtonType:](setbuttontype%28__%29.md) method redisplays the button before returning.

The types available are for the most common button types, which are also accessible in Interface Builder; you can configure different behavior with the [highlightsBy](highlightsby.md) and [showsStateBy](showsstateby.md) properties.

Note that there is no `-buttonType` method. The set method sets various button properties that together establish the behavior of the type.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [alternateImage](alternateimage.md): The image the button displays in its alternate state.

### Displaying the Cell

- [highlightsBy](highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [showsStateBy](showsstateby.md): The flags that indicate how the button cell shows its alternate state.
