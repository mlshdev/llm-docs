> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/nestingmode-swift.enum](https://developer.apple.com/documentation/appkit/nsruleeditor/nestingmode-swift.enum)

# NSRuleEditor.NestingMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Specifies a type for nesting modes.

## Declaration

```swift
enum NestingMode
```

<a id="overview"></a>

## Overview

See `Nesting Modes` for possible values.

## Topics

### Modes

- [NSRuleEditor.NestingMode.compound](nestingmode-swift.enum/compound.md): Unlimited nesting and compound rows.
- [NSRuleEditor.NestingMode.list](nestingmode-swift.enum/list.md): Allows a single list, with no nesting and no compound rows.
- [NSRuleEditor.NestingMode.simple](nestingmode-swift.enum/simple.md): One compound row at the top with subrows beneath it, and no further nesting allowed.
- [NSRuleEditor.NestingMode.single](nestingmode-swift.enum/single.md): Only a single row is allowed.

### Initializers

- [init(rawValue:)](nestingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a Rule Editor

- [isEditable](iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [nestingMode](nestingmode-swift.property.md): The rule editor’s nesting mode.
- [canRemoveAllRows](canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](rowheight.md): The rule editor’s row height.

# NSRuleEditorNestingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Specifies a type for nesting modes.

## Declaration

```objectivec
enum NSRuleEditorNestingMode : NSUInteger;
```

<a id="overview"></a>

## Overview

See `Nesting Modes` for possible values.

## Topics

### Modes

- [NSRuleEditorNestingModeCompound](nestingmode-swift.enum/compound.md): Unlimited nesting and compound rows.
- [NSRuleEditorNestingModeList](nestingmode-swift.enum/list.md): Allows a single list, with no nesting and no compound rows.
- [NSRuleEditorNestingModeSimple](nestingmode-swift.enum/simple.md): One compound row at the top with subrows beneath it, and no further nesting allowed.
- [NSRuleEditorNestingModeSingle](nestingmode-swift.enum/single.md): Only a single row is allowed.

## See Also

### Configuring a Rule Editor

- [editable](iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [nestingMode](nestingmode-swift.property.md): The rule editor’s nesting mode.
- [canRemoveAllRows](canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](rowheight.md): The rule editor’s row height.
