> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey)

# NSRuleEditor.PredicatePartKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](../nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

## Declaration

```swift
struct PredicatePartKey
```

## Topics

### Predicate Part Keys

- [comparisonModifier](predicatepartkey/comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [compoundType](predicatepartkey/compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [customSelector](predicatepartkey/customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [leftExpression](predicatepartkey/leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [operatorType](predicatepartkey/operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [options](predicatepartkey/options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [rightExpression](predicatepartkey/rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

### Initializers

- [init(rawValue:)](predicatepartkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Data

- [ruleEditor(\_:child:forCriterion:with:)](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor(\_:displayValueForCriterion:inRow:)](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor(\_:numberOfChildrenForCriterion:with:)](../nsruleeditordelegate/ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor(\_:predicatePartsForCriterion:withDisplayValue:inRow:)](../nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.

# NSRuleEditorPredicatePartKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

These strings are used as keys to the dictionary returned from the delegate’s [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](../nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md) optional method. To construct a valid predicate, the union of the dictionaries for each item in the row must contain the required parts.

## Declaration

```objectivec
typedef NSString * NSRuleEditorPredicatePartKey;
```

## Topics

### Predicate Part Keys

- [NSRuleEditorPredicateComparisonModifier](predicatepartkey/comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [NSRuleEditorPredicateCompoundType](predicatepartkey/compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [NSRuleEditorPredicateCustomSelector](predicatepartkey/customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [NSRuleEditorPredicateLeftExpression](predicatepartkey/leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOperatorType](predicatepartkey/operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [NSRuleEditorPredicateOptions](predicatepartkey/options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [NSRuleEditorPredicateRightExpression](predicatepartkey/rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

## See Also

### Providing Data

- [ruleEditor:child:forCriterion:withRowType:](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md): Returns the child of a given item at a given index.
- [ruleEditor:displayValueForCriterion:inRow:](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md): Returns the value for a given criterion.
- [ruleEditor:numberOfChildrenForCriterion:withRowType:](../nsruleeditordelegate/ruleeditor%28__numberofchildrenforcriterion_with_%29.md): Returns the number of child items of a given criterion or row type.
- [ruleEditor:predicatePartsForCriterion:withDisplayValue:inRow:](../nsruleeditordelegate/ruleeditor%28__predicatepartsforcriterion_withdisplayvalue_inrow_%29.md): Returns a dictionary representing the parts of the predicate determined by the given criterion and value.
