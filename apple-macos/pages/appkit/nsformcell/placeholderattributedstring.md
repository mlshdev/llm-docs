> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/placeholderattributedstring](https://developer.apple.com/documentation/appkit/nsformcell/placeholderattributedstring)

# placeholderAttributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s attributed placeholder string.

## Declaration

```swift
@NSCopying var placeholderAttributedString: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, you can also call `placeholderString` to see if the cell has a plain text placeholder string.

## See Also

### Asking About Placeholder Values

- [placeholderString](placeholderstring.md): The cell’s plain text placeholder string.

# placeholderAttributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s attributed placeholder string.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * placeholderAttributedString;
```

<a id="Discussion"></a>

## Discussion

If this property returns `nil`, you can also call `placeholderString` to see if the cell has a plain text placeholder string.

## See Also

### Asking About Placeholder Values

- [placeholderString](placeholderstring.md): The cell’s plain text placeholder string.
