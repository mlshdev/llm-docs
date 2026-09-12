> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicatepartkey/customselector](https://developer.apple.com/documentation/appkit/nsruleeditor/predicatepartkey/customselector)

# customSelector (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSString` object representing a custom selector.

## Declaration

```swift
static let customSelector: NSRuleEditor.PredicatePartKey
```

<a id="Discussion"></a>

## Discussion

If specified, this overrides the operator type, options, and comparison modifier.

## See Also

### Predicate Part Keys

- [comparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [compoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [leftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [operatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [options](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [rightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.

# NSRuleEditorPredicateCustomSelector (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSString` object representing a custom selector.

## Declaration

```objectivec
extern NSRuleEditorPredicatePartKey const NSRuleEditorPredicateCustomSelector;
```

<a id="Discussion"></a>

## Discussion

If specified, this overrides the operator type, options, and comparison modifier.

## See Also

### Predicate Part Keys

- [NSRuleEditorPredicateComparisonModifier](comparisonmodifier.md): The corresponding value is an `NSNumber` object representing a `NSComparisonPredicateModifier` constant the of the predicate.
- [NSRuleEditorPredicateCompoundType](compoundtype.md): The corresponding value is an `NSNumber` object representing a `NSCompoundPredicateType` constant.
- [NSRuleEditorPredicateLeftExpression](leftexpression.md): The corresponding value is an `NSExpression` object representing the left expression in the predicate.
- [NSRuleEditorPredicateOperatorType](operatortype.md): The corresponding value is an `NSNumber` object representing a `NSPredicateOperatorType` constant.
- [NSRuleEditorPredicateOptions](options.md): The corresponding value is an `NSNumber` object representing an `NSComparisonPredicateOptions` bitfield.
- [NSRuleEditorPredicateRightExpression](rightexpression.md): The corresponding value is an `NSExpression` object representing the right expression in the predicate.
