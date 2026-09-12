> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/settitlealignment(_:)](https://developer.apple.com/documentation/appkit/nsform/settitlealignment(_:))

# setTitleAlignment(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the alignment for all of the entry titles.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func setTitleAlignment(_ mode: NSTextAlignment)
```

## Parameters

- `mode`: The alignment can be one of the following constants: `NSRightTextAlignment`, `NSCenterTextAlignment`, or `NSLeftTextAlignment`.

<a id="Discussion"></a>

## Discussion

The default alignment is `NSRightTextAlignment`.

## See Also

### Changing the Appearance of All the Entries

- [setBezeled(\_:)](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered(\_:)](setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth(\_:)](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize(\_:)](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing(\_:)](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleBaseWritingDirection(\_:)](settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment(\_:)](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection(\_:)](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont(\_:)](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont(\_:)](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields

# setTitleAlignment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the alignment for all of the entry titles.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) setTitleAlignment:(NSTextAlignment) mode;
```

## Parameters

- `mode`: The alignment can be one of the following constants: `NSRightTextAlignment`, `NSCenterTextAlignment`, or `NSLeftTextAlignment`.

<a id="Discussion"></a>

## Discussion

The default alignment is `NSRightTextAlignment`.

## See Also

### Changing the Appearance of All the Entries

- [setBezeled:](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered:](setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth:](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize:](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing:](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleBaseWritingDirection:](settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment:](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection:](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont:](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont:](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields
