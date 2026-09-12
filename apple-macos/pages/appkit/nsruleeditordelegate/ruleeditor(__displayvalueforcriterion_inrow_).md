> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate/ruleeditor(_:displayvalueforcriterion:inrow:)](https://developer.apple.com/documentation/appkit/nsruleeditordelegate/ruleeditor(_:displayvalueforcriterion:inrow:))

# ruleEditor(\_:displayValueForCriterion:inRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for a given criterion.

## Declaration

```swift
@MainActor func ruleEditor(_ editor: NSRuleEditor, displayValueForCriterion criterion: Any, inRow row: Int) -> Any
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the value is required.
- `row`: The row number of `criterion`.

<a id="return-value"></a>

## Return Value

The value for `criterion`.

<a id="Discussion"></a>

## Discussion

The value should be an instance of `NSString`, `NSView`, or `NSMenuItem`. If the value is an `NSView` or `NSMenuItem`, you must ensure it is unique for every invocation of this method; that is, do not return a particular instance of `NSView` or `NSMenuItem` more than once.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate must implement this method.

## See Also

### Providing Data

- [ruleEditor(\_:child:forCriterion:with:)](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor(\_:numberOfChildrenForCriterion:with:)](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditor.PredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

# ruleEditor:displayValueForCriterion:inRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for a given criterion.

## Declaration

```objectivec
- (id) ruleEditor:(NSRuleEditor *) editor displayValueForCriterion:(id) criterion inRow:(NSInteger) row;
```

## Parameters

- `editor`: The rule editor that sent the message.
- `criterion`: The criterion for which the value is required.
- `row`: The row number of `criterion`.

<a id="return-value"></a>

## Return Value

The value for `criterion`.

<a id="Discussion"></a>

## Discussion

The value should be an instance of `NSString`, `NSView`, or `NSMenuItem`. If the value is an `NSView` or `NSMenuItem`, you must ensure it is unique for every invocation of this method; that is, do not return a particular instance of `NSView` or `NSMenuItem` more than once.

<a id="Special-Considerations"></a>

### Special Considerations

The delegate must implement this method.

## See Also

### Providing Data

- [ruleEditor:child:forCriterion:withRowType:](ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor:numberOfChildrenForCriterion:withRowType:](ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditorPredicatePartKey](../nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.
