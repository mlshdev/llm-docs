> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/textcontainerorigin](https://developer.apple.com/documentation/appkit/nstextview/textcontainerorigin)

# textContainerOrigin (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The origin of the receiver’s text container.

## Declaration

```swift
var textContainerOrigin: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

Calculated from the receiver’s bounds rectangle, container inset, and the container’s used rect.

## See Also

### Related Documentation

- [usedRect(for:)](../nslayoutmanager/usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# textContainerOrigin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The origin of the receiver’s text container.

## Declaration

```objectivec
@property (readonly) NSPoint textContainerOrigin;
```

<a id="Discussion"></a>

## Discussion

Calculated from the receiver’s bounds rectangle, container inset, and the container’s used rect.

## See Also

### Related Documentation

- [usedRectForTextContainer:](../nslayoutmanager/usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
