> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/placeholderstring](https://developer.apple.com/documentation/appkit/nstextfieldcell/placeholderstring)

# placeholderString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placeholder text for the cell, specified as a plain text string.

## Declaration

```swift
var placeholderString: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also clears out any value set for the [placeholderAttributedString](placeholderattributedstring.md) property.

## See Also

### Managing Placeholder Strings

- [placeholderAttributedString](placeholderattributedstring.md): The placeholder text for the cell, specified as an attributed string.

# placeholderString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placeholder text for the cell, specified as a plain text string.

## Declaration

```objectivec
@property (copy, nullable) NSString * placeholderString;
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also clears out any value set for the [placeholderAttributedString](placeholderattributedstring.md) property.

## See Also

### Managing Placeholder Strings

- [placeholderAttributedString](placeholderattributedstring.md): The placeholder text for the cell, specified as an attributed string.
