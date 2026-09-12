> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/init(wrappinglabelwithstring:)](https://developer.apple.com/documentation/appkit/nstextfield/init(wrappinglabelwithstring:))

# init(wrappingLabelWithString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

## Declaration

```swift
convenience init(wrappingLabelWithString stringValue: String)
```

## Parameters

- `stringValue`: A string to use as the initial content of the editable text field.

<a id="return-value"></a>

## Return Value

A multiline text field that displays the specified string.

## See Also

### Creating text fields

- [init(labelWithAttributedString:)](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [init(labelWithString:)](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [init(string:)](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.

# wrappingLabelWithString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

## Declaration

```objectivec
+ (instancetype) wrappingLabelWithString:(NSString *) stringValue;
```

## Parameters

- `stringValue`: A string to use as the initial content of the editable text field.

<a id="return-value"></a>

## Return Value

A multiline text field that displays the specified string.

## See Also

### Creating text fields

- [labelWithAttributedString:](init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [labelWithString:](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [textFieldWithString:](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
