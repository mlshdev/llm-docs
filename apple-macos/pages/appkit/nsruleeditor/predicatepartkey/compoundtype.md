> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey/compoundtype](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey/compoundtype)

# compoundType (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.

## Declaration

```swift
static let compoundType: NSRuleEditor.PredicatePartKey
```

<a id="Discussion"></a>

## Discussion

If specified, the other keys are ignored and the predicate for the row will be an [NSCompoundPredicate](https://developer.apple.com/documentation/foundation/nscompoundpredicate) predicate whose subpredicates are the predicates of the subrows of the given row.

## See Also

### Predicate Part Keys

- [comparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [customSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [leftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [operatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [options](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [rightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

# NSRuleEditorPredicateCompoundType (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.

## Declaration

```objectivec
extern NSRuleEditorPredicatePartKey const NSRuleEditorPredicateCompoundType;
```

<a id="Discussion"></a>

## Discussion

If specified, the other keys are ignored and the predicate for the row will be an [NSCompoundPredicate](https://developer.apple.com/documentation/foundation/nscompoundpredicate) predicate whose subpredicates are the predicates of the subrows of the given row.

## See Also

### Predicate Part Keys

- [NSRuleEditorPredicateComparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [NSRuleEditorPredicateCustomSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [NSRuleEditorPredicateLeftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOperatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [NSRuleEditorPredicateOptions](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [NSRuleEditorPredicateRightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.
