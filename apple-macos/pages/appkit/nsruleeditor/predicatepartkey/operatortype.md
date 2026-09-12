> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey/operatortype](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey/operatortype)

# operatorType (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.

## Declaration

```swift
static let operatorType: NSRuleEditor.PredicatePartKey
```

<a id="Discussion"></a>

## Discussion

This value is required for a non-`nil` comparison predicate.

## See Also

### Predicate Part Keys

- [comparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [compoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [customSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [leftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [options](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [rightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

# NSRuleEditorPredicateOperatorType (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.

## Declaration

```objectivec
extern NSRuleEditorPredicatePartKey const NSRuleEditorPredicateOperatorType;
```

<a id="Discussion"></a>

## Discussion

This value is required for a non-`nil` comparison predicate.

## See Also

### Predicate Part Keys

- [NSRuleEditorPredicateComparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [NSRuleEditorPredicateCompoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [NSRuleEditorPredicateCustomSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [NSRuleEditorPredicateLeftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOptions](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [NSRuleEditorPredicateRightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.
