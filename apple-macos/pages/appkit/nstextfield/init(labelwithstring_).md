> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/init(labelwithstring:)](https://developer.apple.com/documentation/appkit/nstextfield/init(labelwithstring:))

# init(labelWithString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.

## Declaration

```swift
convenience init(labelWithString stringValue: String)
```

## Parameters

- `stringValue`: A string to use as the content of the label.

<a id="return-value"></a>

## Return Value

A text field that displays the specified string as a static label.

## See Also

### Creating text fields

- [init(labelWithAttributedString:)](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [init(string:)](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [init(wrappingLabelWithString:)](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

# labelWithString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.

## Declaration

```objectivec
+ (instancetype) labelWithString:(NSString *) stringValue;
```

## Parameters

- `stringValue`: A string to use as the content of the label.

<a id="return-value"></a>

## Return Value

A text field that displays the specified string as a static label.

## See Also

### Creating text fields

- [labelWithAttributedString:](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [textFieldWithString:](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [wrappingLabelWithString:](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.
