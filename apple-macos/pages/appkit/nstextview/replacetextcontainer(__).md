> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/replacetextcontainer(_:)](https://developer.apple.com/documentation/appkit/nstextview/replacetextcontainer(_:))

# replaceTextContainer(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.

## Declaration

```swift
func replaceTextContainer(_ newContainer: NSTextContainer)
```

## Parameters

- `newContainer`: The new text container. This method raises `NSInvalidArgumentException` if `aTextContainer` is `nil`.

## See Also

### Related Documentation

- [init(frame:textContainer:)](init%28frame_textcontainer_%29.md): Initializes a text view.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# replaceTextContainer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.

## Declaration

```objectivec
- (void) replaceTextContainer:(NSTextContainer *) newContainer;
```

## Parameters

- `newContainer`: The new text container. This method raises `NSInvalidArgumentException` if `aTextContainer` is `nil`.

## See Also

### Related Documentation

- [initWithFrame:textContainer:](init%28frame_textcontainer_%29.md): Initializes a text view.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
