> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/init(compoundtypes:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/init(compoundtypes:))

# init(compoundTypes:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes and returns a row template suitable for displaying compound predicates.

## Declaration

```swift
init(compoundTypes: [NSNumber])
```

## Parameters

- `compoundTypes`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying compound predicate types. See [NSCompoundPredicate.LogicalType](https://developer.apple.com/documentation/foundation/nscompoundpredicate/logicaltype) for possible values.

<a id="return-value"></a>

## Return Value

A row template initialized for displaying compound predicates of the types specified by `compoundTypes`.

<a id="Discussion"></a>

## Discussion

[NSPredicateEditor](../nspredicateeditor.md) contains such a template by default.

## See Also

### Initializing a Template

- [init(leftExpressions:rightExpressions:modifier:operators:options:)](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [init(leftExpressions:rightExpressionAttributeType:modifier:operators:options:)](init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.

# initWithCompoundTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes and returns a row template suitable for displaying compound predicates.

## Declaration

```objectivec
- (instancetype) initWithCompoundTypes:(NSArray<NSNumber *> *) compoundTypes;
```

## Parameters

- `compoundTypes`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying compound predicate types. See [NSCompoundPredicateType](https://developer.apple.com/documentation/foundation/nscompoundpredicate/logicaltype) for possible values.

<a id="return-value"></a>

## Return Value

A row template initialized for displaying compound predicates of the types specified by `compoundTypes`.

<a id="Discussion"></a>

## Discussion

[NSPredicateEditor](../nspredicateeditor.md) contains such a template by default.

## See Also

### Initializing a Template

- [initWithLeftExpressions:rightExpressions:modifier:operators:options:](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [initWithLeftExpressions:rightExpressionAttributeType:modifier:operators:options:](init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.
