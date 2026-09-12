> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/layoutmanager](https://developer.apple.com/documentation/appkit/nstextview/layoutmanager)

# layoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The layout manager that lays out text for the receiver’s text container.

## Declaration

```swift
unowned(unsafe) var layoutManager: NSLayoutManager? { get }
```

## See Also

### Related Documentation

- [layoutManager](../nstextcontainer/layoutmanager.md): The text container’s layout manager.
- [replaceLayoutManager(\_:)](../nstextcontainer/replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# layoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The layout manager that lays out text for the receiver’s text container.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSLayoutManager * layoutManager;
```

## See Also

### Related Documentation

- [layoutManager](../nstextcontainer/layoutmanager.md): The text container’s layout manager.
- [replaceLayoutManager:](../nstextcontainer/replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
