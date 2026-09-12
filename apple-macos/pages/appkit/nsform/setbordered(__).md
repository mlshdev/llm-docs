> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/setbordered(_:)](https://developer.apple.com/documentation/appkit/nsform/setbordered(_:))

# setBordered(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets whether the receiver’s entries should display a border around their editable text fields.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func setBordered(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to display a border around all entries; otherwise, [false](https://developer.apple.com/documentation/swift/false) to show no border around all entries.

<a id="Discussion"></a>

## Discussion

The border is drawn as a thin line around the editable text field. An entry can have a border or a bezel, but not both.

## See Also

### Related Documentation

- [isBordered](../nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.

### Changing the Appearance of All the Entries

- [setBezeled(\_:)](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setEntryWidth(\_:)](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize(\_:)](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing(\_:)](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment(\_:)](settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTitleBaseWritingDirection(\_:)](settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment(\_:)](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection(\_:)](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont(\_:)](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont(\_:)](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields

# setBordered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets whether the receiver’s entries should display a border around their editable text fields.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) setBordered:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to display a border around all entries; otherwise, [false](https://developer.apple.com/documentation/swift/false) to show no border around all entries.

<a id="Discussion"></a>

## Discussion

The border is drawn as a thin line around the editable text field. An entry can have a border or a bezel, but not both.

## See Also

### Related Documentation

- [bordered](../nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.

### Changing the Appearance of All the Entries

- [setBezeled:](setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setEntryWidth:](setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize:](setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing:](setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment:](settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTitleBaseWritingDirection:](settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment:](settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection:](settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont:](settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont:](settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields
