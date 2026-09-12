> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/init(textcell:)](https://developer.apple.com/documentation/appkit/nsformcell/init(textcell:))

# init(textCell:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSFormCell` object initialized with the specified title string.

## Declaration

```swift
init(textCell string: String?)
```

## Parameters

- `string`: The title for the new form cell object.

<a id="return-value"></a>

## Return Value

An initialized `NSFormCell` object.

<a id="Discussion"></a>

## Discussion

The contents of the cell’s editable text entry field are set to the empty string (`@""`). The font for both title and text is the user’s chosen system font in 12.0 point, and the text area is drawn with a bezel. This method is the designated initializer for the `NSFormCell` class.

## See Also

### Related Documentation

- [Form Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Form/Form.html#//apple_ref/doc/uid/10000021i)

# initTextCell: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSFormCell` object initialized with the specified title string.

## Declaration

```objectivec
- (instancetype) initTextCell:(NSString *) string;
```

## Parameters

- `string`: The title for the new form cell object.

<a id="return-value"></a>

## Return Value

An initialized `NSFormCell` object.

<a id="Discussion"></a>

## Discussion

The contents of the cell’s editable text entry field are set to the empty string (`@""`). The font for both title and text is the user’s chosen system font in 12.0 point, and the text area is drawn with a bezel. This method is the designated initializer for the `NSFormCell` class.

## See Also

### Related Documentation

- [Form Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Form/Form.html#//apple_ref/doc/uid/10000021i)
