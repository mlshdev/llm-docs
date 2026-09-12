> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/invalidatetextcontainerorigin()](https://developer.apple.com/documentation/appkit/nstextview/invalidatetextcontainerorigin())

# invalidateTextContainerOrigin() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates the calculated origin of the text container.

## Declaration

```swift
func invalidateTextContainerOrigin()
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically; you should never need to invoke it directly. Usually called because the text view has been resized or the contents of the text container have changed.

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.

# invalidateTextContainerOrigin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates the calculated origin of the text container.

## Declaration

```objectivec
- (void) invalidateTextContainerOrigin;
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically; you should never need to invoke it directly. Usually called because the text view has been resized or the contents of the text container have changed.

## See Also

### Accessing text system objects

- [stronglyReferencesTextStorage](stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](fieldeditor%28%29.md)
- [textContainer](textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](textcontainerorigin.md): The origin of the receiver’s text container.
- [textLayoutManager](textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](textcontentstorage.md): The receiver’s text storage object.
- [textStorage](textstorage.md): The receiver’s text storage object.
