> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/settitlebasewritingdirection(_:)](https://developer.apple.com/documentation/appkit/nsform/settitlebasewritingdirection(_:))

# setTitleBaseWritingDirection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the writing direction for the title of every control embedded in the form.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func setTitleBaseWritingDirection(_ writingDirection: NSWritingDirection)
```

## Parameters

- `writingDirection`: This value can be one of the following constants: `NSWritingDirectionNatural`, `NSWritingDirectionLeftToRight`, or `NSWritingDirectionRightToLeft`.

## See Also

### Changing the Appearance of All the Entries

- [setBezeled(\_:)](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered(\_:)](setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth(\_:)](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize(\_:)](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing(\_:)](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment(\_:)](settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTextAlignment(\_:)](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection(\_:)](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont(\_:)](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont(\_:)](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields

# setTitleBaseWritingDirection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the writing direction for the title of every control embedded in the form.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) setTitleBaseWritingDirection:(NSWritingDirection) writingDirection;
```

## Parameters

- `writingDirection`: This value can be one of the following constants: `NSWritingDirectionNatural`, `NSWritingDirectionLeftToRight`, or `NSWritingDirectionRightToLeft`.

## See Also

### Changing the Appearance of All the Entries

- [setBezeled:](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered:](setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth:](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize:](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing:](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment:](settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTextAlignment:](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection:](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont:](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont:](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields
