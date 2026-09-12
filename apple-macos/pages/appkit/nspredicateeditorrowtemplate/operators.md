> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/operators](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/operators)

# operators (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the array of comparison predicate operators.

## Declaration

```swift
var operators: [NSNumber]? { get }
```

<a id="return-value"></a>

## Return Value

The array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the comparison predicate operators. See [NSComparisonPredicate.Operator](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values.

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](compoundtypes.md): Returns the compound predicate types.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [options](options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.

# operators (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the array of comparison predicate operators.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSNumber *> * operators;
```

<a id="return-value"></a>

## Return Value

The array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the comparison predicate operators. See [NSPredicateOperatorType](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values.

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](compoundtypes.md): Returns the compound predicate types.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [options](options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.
