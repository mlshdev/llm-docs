> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/placeholderattributedstring](https://developer.apple.com/documentation/appkit/nstextfieldcell/placeholderattributedstring)

# placeholderAttributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placeholder text for the cell, specified as an attributed string.

## Declaration

```swift
@NSCopying var placeholderAttributedString: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also clears out any value set for the [placeholderString](placeholderstring.md) property.

## See Also

### Managing Placeholder Strings

- [placeholderString](placeholderstring.md): The placeholder text for the cell, specified as a plain text string.

# placeholderAttributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placeholder text for the cell, specified as an attributed string.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * placeholderAttributedString;
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also clears out any value set for the [placeholderString](placeholderstring.md) property.

## See Also

### Managing Placeholder Strings

- [placeholderString](placeholderstring.md): The placeholder text for the cell, specified as a plain text string.
