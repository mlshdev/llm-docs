> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey/options](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey/options)

# options (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.

## Declaration

```swift
static let options: NSRuleEditor.PredicatePartKey
```

<a id="Discussion"></a>

## Discussion

If no value is specified, `0` (no options) is assumed.

## See Also

### Predicate Part Keys

- [comparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [compoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [customSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [leftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [operatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [rightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

# NSRuleEditorPredicateOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.

## Declaration

```objectivec
extern NSRuleEditorPredicatePartKey const NSRuleEditorPredicateOptions;
```

<a id="Discussion"></a>

## Discussion

If no value is specified, `0` (no options) is assumed.

## See Also

### Predicate Part Keys

- [NSRuleEditorPredicateComparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [NSRuleEditorPredicateCompoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [NSRuleEditorPredicateCustomSelector](customselector.md): The corresponding value is an `NSString` object representing a custom selector.
- [NSRuleEditorPredicateLeftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOperatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [NSRuleEditorPredicateRightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.
