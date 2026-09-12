> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/init(pickermask:colorpanel:)](https://developer.apple.com/documentation/appkit/nscolorpicker/init(pickermask:colorpanel:))

# init(pickerMask:colorPanel:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes the color picker with the specified color panel and color picker mode mask.

## Declaration

```swift
@MainActor init?(pickerMask mask: Int, colorPanel owningColorPanel: NSColorPanel)
```

## Parameters

- `mask`: The color picker mask.
- `owningColorPanel`: The `NSColorPanel` that owns the color picker. This value is cached so it can be accessed using the [colorPanel](colorpanel.md) property.

<a id="return-value"></a>

## Return Value

An initialized color picker object.

<a id="Discussion"></a>

## Discussion

Override this method to respond to the values in `mask` or do other custom initialization. If you override this method in a subclass, you should forward the message to `super` as part of the implementation.

## See Also

### Related Documentation

- [colorPanel](colorpanel.md): The color panel instance that owns the color picker.
- [init(pickerMask:colorPanel:)](../nscolorpickingdefault/init%28pickermask_colorpanel_%29.md): Initializes the receiver with a given color panel and its mode.

# initWithPickerMask:colorPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the color picker with the specified color panel and color picker mode mask.

## Declaration

```objectivec
- (instancetype) initWithPickerMask:(NSUInteger) mask colorPanel:(NSColorPanel *) owningColorPanel;
```

## Parameters

- `mask`: The color picker mask.
- `owningColorPanel`: The `NSColorPanel` that owns the color picker. This value is cached so it can be accessed using the [colorPanel](colorpanel.md) property.

<a id="return-value"></a>

## Return Value

An initialized color picker object.

<a id="Discussion"></a>

## Discussion

Override this method to respond to the values in `mask` or do other custom initialization. If you override this method in a subclass, you should forward the message to `super` as part of the implementation.

## See Also

### Related Documentation

- [colorPanel](colorpanel.md): The color panel instance that owns the color picker.
- [initWithPickerMask:colorPanel:](../nscolorpickingdefault/init%28pickermask_colorpanel_%29.md): Initializes the receiver with a given color panel and its mode.
