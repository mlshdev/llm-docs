> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate/ruleeditor(_:child:forcriterion:with:)](https://developer.apple.com/documentation/appkit/nsruleeditordelegate/ruleeditor(_:child:forcriterion:with:))

# ruleEditor(\_:child:forCriterion:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the child of a given item at a given index.

## Declaration

```swift
@MainActor func ruleEditor(_ editor: NSRuleEditor, child index: Int, forCriterion criterion: Any?, with rowType: NSRuleEditor.RowType) -> Any
```

## Parameters

- `editor`: The rule editor that sent the message.
- `index`: The index of the requested child criterion. This value must be in the range from `0` up to (but not including) the number of children, as reported by the delegate in [ruleEditor(\_:numberOfChildrenForCriterion:with:)](ruleeditor%28__numberofchildrenforcriterion_with_%29.md).
- `criterion`: The parent of the requested child, or `nil` if the rule editor is requesting a root criterion.
- `rowType`: The type of the row.

<a id="return-value"></a>

## Return Value

An object representing the requested child (or root) criterion. This object is used by the delegate to represent that position in the tree, and is passed as a parameter in subsequent calls to the delegate.

<a id="Discussion"></a>

## Discussion

The delegate must implement this method.

## See Also

### Related Documentation

- [NSRuleEditor](../nsruleeditor.md): An interface for configuring a rule-based list of options.

### Providing Data

- [ruleEditor(\_:displayValueForCriterion:inRow:)](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor(\_:numberOfChildrenForCriterion:with:)](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditor.PredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

# ruleEditor:child:forCriterion:withRowType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the child of a given item at a given index.

## Declaration

```objectivec
- (id) ruleEditor:(NSRuleEditor *) editor child:(NSInteger) index forCriterion:(id) criterion withRowType:(NSRuleEditorRowType) rowType;
```

## Parameters

- `editor`: The rule editor that sent the message.
- `index`: The index of the requested child criterion. This value must be in the range from `0` up to (but not including) the number of children, as reported by the delegate in [ruleEditor:numberOfChildrenForCriterion:withRowType:](ruleeditor%28__numberofchildrenforcriterion_with_%29.md).
- `criterion`: The parent of the requested child, or `nil` if the rule editor is requesting a root criterion.
- `rowType`: The type of the row.

<a id="return-value"></a>

## Return Value

An object representing the requested child (or root) criterion. This object is used by the delegate to represent that position in the tree, and is passed as a parameter in subsequent calls to the delegate.

<a id="Discussion"></a>

## Discussion

The delegate must implement this method.

## See Also

### Related Documentation

- [NSRuleEditor](../nsruleeditor.md): An interface for configuring a rule-based list of options.

### Providing Data

- [ruleEditor:displayValueForCriterion:inRow:](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor:numberOfChildrenForCriterion:withRowType:](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditorPredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.
