> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/selectall(_:)](https://developer.apple.com/documentation/appkit/nstext/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method selects all of the receiver’s text.

## Declaration

```swift
func selectAll(_ sender: Any?)
```

## See Also

### Action methods for editing

- [copy(\_:)](copy%28__%29.md): This action method copies the selected text onto the general pasteboard, in as many formats as the receiver supports.
- [cut(\_:)](cut%28__%29.md): This action method deletes the selected text and places it onto the general pasteboard, in as many formats as the receiver supports.
- [paste(\_:)](paste%28__%29.md): This action method pastes text from the general pasteboard at the insertion point or over the selection.
- [copyFont(\_:)](copyfont%28__%29.md): This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard, as `NSFontPboardType`.
- [pasteFont(\_:)](pastefont%28__%29.md): This action method pastes font information from the font pasteboard onto the selected text or insertion point of a rich text object, or over all text of a plain text object.
- [copyRuler(\_:)](copyruler%28__%29.md): This action method copies the paragraph style information for first selected paragraph onto the ruler pasteboard, as `NSRulerPboardType`, and expands the selection to paragraph boundaries.
- [pasteRuler(\_:)](pasteruler%28__%29.md): This action method pastes paragraph style information from the ruler pasteboard onto the selected paragraphs of a rich text object.
- [delete(\_:)](delete%28__%29.md): This action method deletes the selected text.

# selectAll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method selects all of the receiver’s text.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## See Also

### Action methods for editing

- [copy:](copy%28__%29.md): This action method copies the selected text onto the general pasteboard, in as many formats as the receiver supports.
- [cut:](cut%28__%29.md): This action method deletes the selected text and places it onto the general pasteboard, in as many formats as the receiver supports.
- [paste:](paste%28__%29.md): This action method pastes text from the general pasteboard at the insertion point or over the selection.
- [copyFont:](copyfont%28__%29.md): This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard, as `NSFontPboardType`.
- [pasteFont:](pastefont%28__%29.md): This action method pastes font information from the font pasteboard onto the selected text or insertion point of a rich text object, or over all text of a plain text object.
- [copyRuler:](copyruler%28__%29.md): This action method copies the paragraph style information for first selected paragraph onto the ruler pasteboard, as `NSRulerPboardType`, and expands the selection to paragraph boundaries.
- [pasteRuler:](pasteruler%28__%29.md): This action method pastes paragraph style information from the ruler pasteboard onto the selected paragraphs of a rich text object.
- [delete:](delete%28__%29.md): This action method deletes the selected text.
