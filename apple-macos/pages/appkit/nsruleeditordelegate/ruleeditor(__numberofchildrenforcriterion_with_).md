> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate/ruleeditor(_:numberofchildrenforcriterion:with:)](https://developer.apple.com/documentation/appkit/nsruleeditordelegate/ruleeditor(_:numberofchildrenforcriterion:with:))

# ruleEditor(\_:numberOfChildrenForCriterion:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of child items of a given criterion or row type.

## Declaration

```swift
@MainActor func ruleEditor(_ editor: NSRuleEditor, numberOfChildrenForCriterion criterion: Any?, with rowType: NSRuleEditor.RowType) -> Int
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the number of children is required.
- `rowType`: The type of row of `criterion`.

<a id="return-value"></a>

## Return Value

The number of child items of `criterion`. If `criterion` is `nil`, return the number of root criteria for the row type `rowType`.

<a id="Discussion"></a>

## Discussion

The delegate must implement this method.

## See Also

### Providing Data

- [ruleEditor(\_:child:forCriterion:with:)](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor(\_:displayValueForCriterion:inRow:)](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditor.PredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

# ruleEditor:numberOfChildrenForCriterion:withRowType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of child items of a given criterion or row type.

## Declaration

```objectivec
- (NSInteger) ruleEditor:(NSRuleEditor *) editor numberOfChildrenForCriterion:(id) criterion withRowType:(NSRuleEditorRowType) rowType;
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the number of children is required.
- `rowType`: The type of row of `criterion`.

<a id="return-value"></a>

## Return Value

The number of child items of `criterion`. If `criterion` is `nil`, return the number of root criteria for the row type `rowType`.

<a id="Discussion"></a>

## Discussion

The delegate must implement this method.

## See Also

### Providing Data

- [ruleEditor:child:forCriterion:withRowType:](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor:displayValueForCriterion:inRow:](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditorPredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.
