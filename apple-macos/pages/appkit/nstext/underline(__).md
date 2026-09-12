> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/underline(_:)](https://developer.apple.com/documentation/appkit/nstext/underline(_:))

# underline(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the underline attribute to the selected text attributes if absent; removes the attribute if present.

## Declaration

```swift
func underline(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

If there is a selection and the first character of the selected range has any form of underline on it, or if there is no selection and the typing attributes have any form of underline, then underline is removed; otherwise a single simple underline is added.

Operates on the selected range if the receiver contains rich text. For plain text the range is the entire contents of the receiver.

# underline: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the underline attribute to the selected text attributes if absent; removes the attribute if present.

## Declaration

```objectivec
- (void) underline:(id) sender;
```

<a id="Discussion"></a>

## Discussion

If there is a selection and the first character of the selected range has any form of underline on it, or if there is no selection and the typing attributes have any form of underline, then underline is removed; otherwise a single simple underline is added.

Operates on the selected range if the receiver contains rich text. For plain text the range is the entire contents of the receiver.
