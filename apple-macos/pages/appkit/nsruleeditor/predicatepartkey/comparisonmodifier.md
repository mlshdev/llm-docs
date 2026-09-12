> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey/comparisonmodifier](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey/comparisonmodifier)

# comparisonModifier (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.

## Declaration

```swift
static let comparisonModifier: NSRuleEditor.PredicatePartKey
```

<a id="Discussion"></a>

## Discussion

This value is optional. If not specified, [NSComparisonPredicate.Modifier.direct](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier/direct) is assumed.

## See Also

### Predicate Part Keys

- [compoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [customSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [leftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [operatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [options](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [rightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

# NSRuleEditorPredicateComparisonModifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.

## Declaration

```objectivec
extern NSRuleEditorPredicatePartKey const NSRuleEditorPredicateComparisonModifier;
```

<a id="Discussion"></a>

## Discussion

This value is optional. If not specified, [NSDirectPredicateModifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier/direct) is assumed.

## See Also

### Predicate Part Keys

- [NSRuleEditorPredicateCompoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [NSRuleEditorPredicateCustomSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [NSRuleEditorPredicateLeftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOperatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [NSRuleEditorPredicateOptions](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [NSRuleEditorPredicateRightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.
