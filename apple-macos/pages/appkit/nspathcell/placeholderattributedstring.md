> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/placeholderattributedstring](https://developer.apple.com/documentation/appkit/nspathcell/placeholderattributedstring)

# placeholderAttributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the value of the placeholder attributed string.

## Declaration

```swift
@NSCopying var placeholderAttributedString: NSAttributedString? { get set }
```

## Parameters

- `string`: The string to set for the placeholder attributed string.

<a id="Discussion"></a>

## Discussion

If the `NSPathCell` object contains no `NSPathComponentCell` objects, the placeholder attributed string is drawn in their place, if it is not `nil`. If the placeholder attributed string is `nil`, the (non-attributed) placeholder string is drawn with default attributes, if it is not `nil`.

## See Also

### Setting Cell Appearance

- [placeholderString](placeholderstring.md): Returns the placeholder string.
- [backgroundColor](backgroundcolor.md): Returns the current background color of the receiver.

# placeholderAttributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets the value of the placeholder attributed string.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * placeholderAttributedString;
```

## Parameters

- `string`: The string to set for the placeholder attributed string.

<a id="Discussion"></a>

## Discussion

If the `NSPathCell` object contains no `NSPathComponentCell` objects, the placeholder attributed string is drawn in their place, if it is not `nil`. If the placeholder attributed string is `nil`, the (non-attributed) placeholder string is drawn with default attributes, if it is not `nil`.

## See Also

### Setting Cell Appearance

- [placeholderString](placeholderstring.md): Returns the placeholder string.
- [backgroundColor](backgroundcolor.md): Returns the current background color of the receiver.
