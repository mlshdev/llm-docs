> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/options](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/options)

# options (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the comparison predicate options.

## Declaration

```swift
var options: Int { get }
```

<a id="return-value"></a>

## Return Value

The comparison predicate options for the receiver. See [NSComparisonPredicate.Options](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values. Returns `0` if this does not apply (for example, for a compound template initialized with [init(compoundTypes:)](init%28compoundtypes_%29.md)).

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](compoundtypes.md): Returns the compound predicate types.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](operators.md): Returns the array of comparison predicate operators.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.

# options (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the comparison predicate options.

## Declaration

```objectivec
@property (readonly) NSUInteger options;
```

<a id="return-value"></a>

## Return Value

The comparison predicate options for the receiver. See [NSComparisonPredicateOptions](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values. Returns `0` if this does not apply (for example, for a compound template initialized with [initWithCompoundTypes:](init%28compoundtypes_%29.md)).

## See Also

### Information About a Row Template

- [leftExpressions](leftexpressions.md): Returns the left hand expressions for the receiver.
- [rightExpressions](rightexpressions.md): Returns the right hand expressions for the receiver.
- [compoundTypes](compoundtypes.md): Returns the compound predicate types.
- [modifier](modifier.md): Returns the comparison predicate modifier for the receiver.
- [operators](operators.md): Returns the array of comparison predicate operators.
- [rightExpressionAttributeType](rightexpressionattributetype.md): Returns the attribute type of the receiver’s right expression.
