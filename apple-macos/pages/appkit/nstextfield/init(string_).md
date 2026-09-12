> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/init(string:)](https://developer.apple.com/documentation/appkit/nstextfield/init(string:))

# init(string:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Initializes a single-line editable text field for user input using the system default font and standard visual appearance.

## Declaration

```swift
convenience init(string stringValue: String)
```

## Parameters

- `stringValue`: A string to use as the initial content of the editable text field.

<a id="return-value"></a>

## Return Value

A single-line editable text field that displays the specified string.

## See Also

### Creating text fields

- [init(labelWithAttributedString:)](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [init(labelWithString:)](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [init(wrappingLabelWithString:)](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

# textFieldWithString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Initializes a single-line editable text field for user input using the system default font and standard visual appearance.

## Declaration

```objectivec
+ (instancetype) textFieldWithString:(NSString *) stringValue;
```

## Parameters

- `stringValue`: A string to use as the initial content of the editable text field.

<a id="return-value"></a>

## Return Value

A single-line editable text field that displays the specified string.

## See Also

### Creating text fields

- [labelWithAttributedString:](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [labelWithString:](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [wrappingLabelWithString:](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.
