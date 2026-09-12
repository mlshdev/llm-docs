> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/name-swift.struct](https://developer.apple.com/documentation/appkit/nspasteboard/name-swift.struct)

# NSPasteboard.Name (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that represent the standard pasteboard names.

## Declaration

```swift
struct Name
```

## Topics

### Named Pasteboards

- [drag](name-swift.struct/drag.md): The pasteboard that stores data to move as the result of a drag operation.
- [find](name-swift.struct/find.md): The pasteboard that holds information about the current state of the active application’s find panel.
- [font](name-swift.struct/font.md): The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that the text editor may implement.
- [general](name-swift.struct/general.md): The pasteboard you use to perform ordinary cut, copy, and paste operations.
- [ruler](name-swift.struct/ruler.md): The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands that the text editor may implement.

### Deprecated

- [dragPboard](name-swift.struct/dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [findPboard](name-swift.struct/findpboard.md): Deprecated. The pasteboard that holds information about the current state of the active application’s find panel.
- [fontPboard](name-swift.struct/fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [generalPboard](name-swift.struct/generalpboard.md): Deprecated. The pasteboard used for ordinary cut, copy, and paste operations.
- [rulerPboard](name-swift.struct/rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.

### Initializers

- [init(\_:)](name-swift.struct/init%28__%29.md)
- [init(rawValue:)](name-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating and releasing a pasteboard

- [general](general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [withUniqueName()](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally()](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

# NSPasteboardName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that represent the standard pasteboard names.

## Declaration

```objectivec
typedef NSString * NSPasteboardName;
```

## Topics

### Named Pasteboards

- [NSPasteboardNameDrag](name-swift.struct/drag.md): The pasteboard that stores data to move as the result of a drag operation.
- [NSPasteboardNameFind](name-swift.struct/find.md): The pasteboard that holds information about the current state of the active application’s find panel.
- [NSPasteboardNameFont](name-swift.struct/font.md): The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that the text editor may implement.
- [NSPasteboardNameGeneral](name-swift.struct/general.md): The pasteboard you use to perform ordinary cut, copy, and paste operations.
- [NSPasteboardNameRuler](name-swift.struct/ruler.md): The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands that the text editor may implement.

### Deprecated

- [NSDragPboard](name-swift.struct/dragpboard.md): Deprecated. The pasteboard that stores data to be moved as the result of a drag operation.
- [NSFindPboard](name-swift.struct/findpboard.md): Deprecated. The pasteboard that holds information about the current state of the active application’s find panel.
- [NSFontPboard](name-swift.struct/fontpboard.md): Deprecated. The pasteboard that holds font and character information and supports Copy Font and Paste Font commands that may be implemented in a text editor.
- [NSGeneralPboard](name-swift.struct/generalpboard.md): Deprecated. The pasteboard used for ordinary cut, copy, and paste operations.
- [NSRulerPboard](name-swift.struct/rulerpboard.md): Deprecated. The pasteboard that holds information about paragraph formats and supports the Copy Ruler and Paste Ruler commands implemented in a text editor.

## See Also

### Creating and releasing a pasteboard

- [generalPasteboard](general.md): The shared pasteboard object to use for general content.
- [pasteboardByFilteringData:ofType:](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardByFilteringFile:](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [pasteboardWithName:](init%28name_%29.md): Returns the pasteboard with the specified name.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.
