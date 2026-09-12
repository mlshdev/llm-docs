> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/compoundtypes](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/compoundtypes)

# compoundTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the compound predicate types.

## Declaration

```swift
var compoundTypes: [NSNumber]? { get }
```

<a id="return-value"></a>

## Return Value

An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying compound predicate types. See [NSCompoundPredicate.LogicalType](https://developer.apple.com/documentation/foundation/nscompoundpredicate/logicaltype) for possible values.

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](operators.md): Returns the array of comparison predicate operators.
- [options](options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.

# compoundTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the compound predicate types.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSNumber *> * compoundTypes;
```

<a id="return-value"></a>

## Return Value

An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying compound predicate types. See [NSCompoundPredicateType](https://developer.apple.com/documentation/foundation/nscompoundpredicate/logicaltype) for possible values.

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](operators.md): Returns the array of comparison predicate operators.
- [options](options.md): Returns the comparison predicate options.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.
