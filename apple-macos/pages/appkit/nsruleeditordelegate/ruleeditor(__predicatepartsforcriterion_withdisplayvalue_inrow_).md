> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate/ruleeditor(_:predicatepartsforcriterion:withdisplayvalue:inrow:)](https://developer.apple.com/documentation/appkit/nsruleeditordelegate/ruleeditor(_:predicatepartsforcriterion:withdisplayvalue:inrow:))

# ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a dictionary representing the parts of the predicate determined by the given criterion and value.

## Declaration

```swift
@MainActor optional func ruleEditor(_ editor: NSRuleEditor, predicatePartsForCriterion criterion: Any, withDisplayValue value: Any, inRow row: Int) -> [NSRuleEditor.PredicatePartKey : Any]?
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the predicate parts are required.
- `value`: The display value.
- `row`: The row number of `criterion`.

<a id="return-value"></a>

## Return Value

A dictionary representing the parts of the predicate determined by the given criterion and value. The keys of the dictionary should be the string constants specified in Predicate Part Keys with corresponding appropriate values.

## See Also

### Providing Data

- [ruleEditor(\_:child:forCriterion:with:)](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor(\_:displayValueForCriterion:inRow:)](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor(\_:numberOfChildrenForCriterion:with:)](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [NSRuleEditor.PredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

# ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a dictionary representing the parts of the predicate determined by the given criterion and value.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) ruleEditor:(NSRuleEditor *) editor predicatePartsForCriterion:(id) criterion withDisplayValue:(id) value inRow:(NSInteger) row;
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the predicate parts are required.
- `value`: The display value.
- `row`: The row number of `criterion`.

<a id="return-value"></a>

## Return Value

A dictionary representing the parts of the predicate determined by the given criterion and value. The keys of the dictionary should be the string constants specified in Predicate Part Keys with corresponding appropriate values.

## See Also

### Providing Data

- [ruleEditor:child:forCriterion:withRowType:](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor:displayValueForCriterion:inRow:](ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor:numberOfChildrenForCriterion:withRowType:](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [NSRuleEditorPredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.
