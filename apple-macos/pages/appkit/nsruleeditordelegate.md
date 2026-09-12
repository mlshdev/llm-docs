> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate](https://developer.apple.com/documentation/appkit/nsruleeditordelegate)

# NSRuleEditorDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSRuleEditorDelegate` protocol defines the optional methods implemented by delegates of [NSRuleEditor](nsruleeditor.md) objects.

## Declaration

```swift
protocol NSRuleEditorDelegate : NSObjectProtocol
```

## Topics

### Providing Data

- [ruleEditor(\_:child:forCriterion:with:)](nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor(\_:displayValueForCriterion:inRow:)](nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor(\_:numberOfChildrenForCriterion:with:)](nsruleeditordelegate/ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditor.PredicatePartKey](nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

### Monitoring Row Changes

- [ruleEditorRowsDidChange(\_:)](nsruleeditordelegate/ruleeditorrowsdidchange%28__%29.md): Notifies the receiver that a rule editor’s rows changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuring the Delegate

- [delegate](nsruleeditor/delegate.md): The rule editor’s delegate.

# NSRuleEditorDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSRuleEditorDelegate` protocol defines the optional methods implemented by delegates of [NSRuleEditor](nsruleeditor.md) objects.

## Declaration

```objectivec
@protocol NSRuleEditorDelegate <NSObject>
```

## Topics

### Providing Data

- [ruleEditor:child:forCriterion:withRowType:](nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor:displayValueForCriterion:inRow:](nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor:numberOfChildrenForCriterion:withRowType:](nsruleeditordelegate/ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
- [NSRuleEditorPredicatePartKey](nsruleeditor/predicatepartkey.md): These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

### Monitoring Row Changes

- [ruleEditorRowsDidChange:](nsruleeditordelegate/ruleeditorrowsdidchange%28__%29.md): Notifies the receiver that a rule editor’s rows changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuring the Delegate

- [delegate](nsruleeditor/delegate.md): The rule editor’s delegate.
