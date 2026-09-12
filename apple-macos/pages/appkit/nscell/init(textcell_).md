> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/init(textcell:)](https://developer.apple.com/documentation/appkit/nscell/init(textcell:))

# init(textCell:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.

## Declaration

```swift
init(textCell string: String)
```

## Parameters

- `string`: The initial string to use for the cell.

<a id="return-value"></a>

## Return Value

An initialized `NSCell` object, or `nil` if the cell could not be initialized.

<a id="Discussion"></a>

## Discussion

If no field editor (a shared [NSText](../nstext.md) object) has been created for all `NSCell` objects, one is created.

This is one of four designated initializers you must implement when subclassing. See [Designated Initializers](../nscell.md#Designated-Initializers) for the complete list.

## See Also

### Initializing a Cell

- [init(imageCell:)](init%28imagecell_%29.md): Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.

# initTextCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an NSCell object initialized with the specified string and set to have the cell’s default menu.

## Declaration

```objectivec
- (instancetype) initTextCell:(NSString *) string;
```

## Parameters

- `string`: The initial string to use for the cell.

<a id="return-value"></a>

## Return Value

An initialized `NSCell` object, or `nil` if the cell could not be initialized.

<a id="Discussion"></a>

## Discussion

If no field editor (a shared [NSText](../nstext.md) object) has been created for all `NSCell` objects, one is created.

This is one of four designated initializers you must implement when subclassing. See [Designated Initializers](../nscell.md#Designated-Initializers) for the complete list.

## See Also

### Initializing a Cell

- [initImageCell:](init%28imagecell_%29.md): Returns an `NSCell` object initialized with the specified image and set to have the cell’s default menu.
