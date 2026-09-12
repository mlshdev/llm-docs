> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/textcontainerinset](https://developer.apple.com/documentation/appkit/nstextview/textcontainerinset)

# textContainerInset (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The empty space the receiver leaves around its associated text container.

## Declaration

```swift
var textContainerInset: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

It is possible to set the text container and view sizes and resizing behavior so that the inset cannot be maintained exactly, although the text system tries to maintain the inset wherever possible. In any case, the [textContainerOrigin](textcontainerorigin.md) and size of the text container are authoritative as to the location of the text container within the view.

The text itself can have an additional inset, inside the text container, specified by the [lineFragmentPadding](../nstextcontainer/linefragmentpadding.md) method of `NSTextContainer`.

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# textContainerInset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The empty space the receiver leaves around its associated text container.

## Declaration

```objectivec
@property NSSize textContainerInset;
```

<a id="Discussion"></a>

## Discussion

It is possible to set the text container and view sizes and resizing behavior so that the inset cannot be maintained exactly, although the text system tries to maintain the inset wherever possible. In any case, the [textContainerOrigin](textcontainerorigin.md) and size of the text container are authoritative as to the location of the text container within the view.

The text itself can have an additional inset, inside the text container, specified by the [lineFragmentPadding](../nstextcontainer/linefragmentpadding.md) method of `NSTextContainer`.

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
