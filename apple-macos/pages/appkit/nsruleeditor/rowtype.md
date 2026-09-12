> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/rowtype](https://developer.apple.com/documentation/appkit/nsruleeditor/rowtype)

# NSRuleEditor.RowType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Specifies a type for row types.

## Declaration

```swift
enum RowType
```

<a id="overview"></a>

## Overview

See `Row Types` for possible values.

## Topics

### Enumeration Cases

- [NSRuleEditor.RowType.compound](rowtype/compound.md): Specifies a compound row.
- [NSRuleEditor.RowType.simple](rowtype/simple.md): Specifies a simple row.

### Initializers

- [init(rawValue:)](rowtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRow(forRow:)](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [row(forDisplayValue:)](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowType(forRow:)](rowtype%28forrow_%29.md): Returns the type of a given row.
- [subrowIndexes(forRow:)](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

# NSRuleEditorRowType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Specifies a type for row types.

## Declaration

```objectivec
enum NSRuleEditorRowType : NSUInteger;
```

<a id="overview"></a>

## Overview

See `Row Types` for possible values.

## Topics

### Enumeration Cases

- [NSRuleEditorRowTypeCompound](rowtype/compound.md): Specifies a compound row.
- [NSRuleEditorRowTypeSimple](rowtype/simple.md): Specifies a simple row.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRowForRow:](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowForDisplayValue:](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowTypeForRow:](rowtype%28forrow_%29.md): Returns the type of a given row.
- [subrowIndexesForRow:](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.
