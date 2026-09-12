> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/nestingmode-swift.property](https://developer.apple.com/documentation/appkit/nsruleeditor/nestingmode-swift.property)

# nestingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rule editor’s nesting mode.

## Declaration

```swift
var nestingMode: NSRuleEditor.NestingMode { get set }
```

<a id="Discussion"></a>

## Discussion

You typically set the nesting mode at view creation time and do not subsequently modify it. The default is `NSRuleEditorNestingModeCompound`. For a list of valid modes, see `Nesting Modes`.

## See Also

### Configuring a Rule Editor

- [isEditable](iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [NSRuleEditor.NestingMode](nestingmode-swift.enum.md): Specifies a type for nesting modes.
- [canRemoveAllRows](canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](rowheight.md): The rule editor’s row height.

# nestingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rule editor’s nesting mode.

## Declaration

```objectivec
@property NSRuleEditorNestingMode nestingMode;
```

<a id="Discussion"></a>

## Discussion

You typically set the nesting mode at view creation time and do not subsequently modify it. The default is `NSRuleEditorNestingModeCompound`. For a list of valid modes, see `Nesting Modes`.

## See Also

### Configuring a Rule Editor

- [editable](iseditable.md): A Boolean value that determines whether the rule editor is editable.
- [NSRuleEditorNestingMode](nestingmode-swift.enum.md): Specifies a type for nesting modes.
- [canRemoveAllRows](canremoveallrows.md): A Boolean value that indicates whether all the rows can be removed.
- [rowHeight](rowheight.md): The rule editor’s row height.
