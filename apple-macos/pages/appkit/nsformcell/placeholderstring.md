> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/placeholderstring](https://developer.apple.com/documentation/appkit/nsformcell/placeholderstring)

# placeholderString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s plain text placeholder string.

## Declaration

```swift
var placeholderString: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, you can also call `placeholderAttributedString` to see if the cell has an attributed placeholder string. Note that invoking this method clears out any attributed string set by the [placeholderAttributedString](placeholderattributedstring.md) property.

## See Also

### Asking About Placeholder Values

- [placeholderAttributedString](placeholderattributedstring.md): The cell’s attributed placeholder string.

# placeholderString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s plain text placeholder string.

## Declaration

```objectivec
@property (copy, nullable) NSString * placeholderString;
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, you can also call `placeholderAttributedString` to see if the cell has an attributed placeholder string. Note that invoking this method clears out any attributed string set by the [placeholderAttributedString](placeholderattributedstring.md) property.

## See Also

### Asking About Placeholder Values

- [placeholderAttributedString](placeholderattributedstring.md): The cell’s attributed placeholder string.
