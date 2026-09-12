> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/identifier-swift.struct](https://developer.apple.com/documentation/appkit/nstouchbaritem/identifier-swift.struct)

# NSTouchBarItem.Identifier (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

An identifier for an item in the Touch Bar.

## Declaration

```swift
struct Identifier
```

## Topics

### Creating identifiers for space items

- [fixedSpaceSmall](identifier-swift.struct/fixedspacesmall.md): The identifier of an item appropriate for use as a small space in a Touch Bar.
- [fixedSpaceLarge](identifier-swift.struct/fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.
- [flexibleSpace](identifier-swift.struct/flexiblespace.md): The identifier of an item appropriate for use as a flexible space in a Touch Bar.

### Creating identifiers for Touch Bar nesting

- [otherItemsProxy](identifier-swift.struct/otheritemsproxy.md): The identifier of the special “other items proxy”, which is used to nest bars up the responder chain.

### Creating identifiers for multiple choice items

- [candidateList](identifier-swift.struct/candidatelist.md): The standard identifier for a candidate list bar item.
- [characterPicker](identifier-swift.struct/characterpicker.md): The standard identifier for selecting special characters such as Emoji.

### Creating identifiers for text items

- [textFormat](identifier-swift.struct/textformat.md): The identifier for a group of text format controls.
- [textAlignment](identifier-swift.struct/textalignment.md): The identifier for a Touch Bar item used to select the text alignment.
- [textColorPicker](identifier-swift.struct/textcolorpicker.md): The identifier for a Touch Bar item used to select the text color.
- [textList](identifier-swift.struct/textlist.md): The identifier for a Touch Bar item used to control the text list style.
- [textStyle](identifier-swift.struct/textstyle.md): The identifier for a Touch Bar item used to control the text style.

### Creating a custom identifier

- [init(\_:)](identifier-swift.struct/init%28__%29.md): Creates an item identifier with the specified custom name.
- [init(rawValue:)](identifier-swift.struct/init%28rawvalue_%29.md): Creates an item identifier with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a bar item

- [init(identifier:)](init%28identifier_%29.md): Creates a new item with the specified identifier.
- [init(coder:)](init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.

# NSTouchBarItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS

An identifier for an item in the Touch Bar.

## Declaration

```objectivec
typedef NSString * NSTouchBarItemIdentifier;
```

## Topics

### Creating identifiers for space items

- [NSTouchBarItemIdentifierFixedSpaceSmall](identifier-swift.struct/fixedspacesmall.md): The identifier of an item appropriate for use as a small space in a Touch Bar.
- [NSTouchBarItemIdentifierFixedSpaceLarge](identifier-swift.struct/fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.
- [NSTouchBarItemIdentifierFlexibleSpace](identifier-swift.struct/flexiblespace.md): The identifier of an item appropriate for use as a flexible space in a Touch Bar.

### Creating identifiers for Touch Bar nesting

- [NSTouchBarItemIdentifierOtherItemsProxy](identifier-swift.struct/otheritemsproxy.md): The identifier of the special “other items proxy”, which is used to nest bars up the responder chain.

### Creating identifiers for multiple choice items

- [NSTouchBarItemIdentifierCandidateList](identifier-swift.struct/candidatelist.md): The standard identifier for a candidate list bar item.
- [NSTouchBarItemIdentifierCharacterPicker](identifier-swift.struct/characterpicker.md): The standard identifier for selecting special characters such as Emoji.

### Creating identifiers for text items

- [NSTouchBarItemIdentifierTextFormat](identifier-swift.struct/textformat.md): The identifier for a group of text format controls.
- [NSTouchBarItemIdentifierTextAlignment](identifier-swift.struct/textalignment.md): The identifier for a Touch Bar item used to select the text alignment.
- [NSTouchBarItemIdentifierTextColorPicker](identifier-swift.struct/textcolorpicker.md): The identifier for a Touch Bar item used to select the text color.
- [NSTouchBarItemIdentifierTextList](identifier-swift.struct/textlist.md): The identifier for a Touch Bar item used to control the text list style.
- [NSTouchBarItemIdentifierTextStyle](identifier-swift.struct/textstyle.md): The identifier for a Touch Bar item used to control the text style.

## See Also

### Creating a bar item

- [initWithIdentifier:](init%28identifier_%29.md): Creates a new item with the specified identifier.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.
