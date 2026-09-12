> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/placeholderstring](https://developer.apple.com/documentation/appkit/nspathcell/placeholderstring)

# placeholderString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the placeholder string.

## Declaration

```swift
var placeholderString: String? { get set }
```

<a id="return-value"></a>

## Return Value

The placeholder string.

<a id="Discussion"></a>

## Discussion

If the `NSPathCell` object contains no `NSPathComponentCell` objects, the placeholder attributed string is drawn in their place, if it is not `nil`. If the placeholder attributed string is `nil`, the (non-attributed) placeholder string is drawn with default attributes, if it is not `nil`.

## See Also

### Setting Cell Appearance

- [placeholderAttributedString](placeholderattributedstring.md): Sets the value of the placeholder attributed string.
- [backgroundColor](backgroundcolor.md): Returns the current background color of the receiver.

# placeholderString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the placeholder string.

## Declaration

```objectivec
@property (copy, nullable) NSString * placeholderString;
```

<a id="return-value"></a>

## Return Value

The placeholder string.

<a id="Discussion"></a>

## Discussion

If the `NSPathCell` object contains no `NSPathComponentCell` objects, the placeholder attributed string is drawn in their place, if it is not `nil`. If the placeholder attributed string is `nil`, the (non-attributed) placeholder string is drawn with default attributes, if it is not `nil`.

## See Also

### Setting Cell Appearance

- [placeholderAttributedString](placeholderattributedstring.md): Sets the value of the placeholder attributed string.
- [backgroundColor](backgroundcolor.md): Returns the current background color of the receiver.
