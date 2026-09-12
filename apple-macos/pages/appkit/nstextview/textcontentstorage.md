> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/textcontentstorage](https://developer.apple.com/documentation/appkit/nstextview/textcontentstorage)

# textContentStorage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The receiver’s text storage object.

## Declaration

```swift
weak var textContentStorage: NSTextContentStorage? { get }
```

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textStorage](textstorage.md): The receiver’s text storage object.

# textContentStorage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The receiver’s text storage object.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextContentStorage * textContentStorage;
```

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textStorage](textstorage.md): The receiver’s text storage object.
