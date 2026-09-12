> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/init(type:subpredicates:)](https://developer.apple.com/documentation/foundation/nscompoundpredicate/init(type:subpredicates:))

# init(type:subpredicates:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver that a specified type initializes using predicates from a specified array.

## Declaration

```swift
init(type: NSCompoundPredicate.LogicalType, subpredicates: [NSPredicate])
```

## Parameters

- `type`: The type of the new predicate.
- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

The receiver initialized with its type set to type and subpredicates array to `subpredicates`.

<a id="Discussion"></a>

## Discussion

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [init(andPredicateWithSubpredicates:)](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [init(notPredicateWithSubpredicate:)](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [init(orPredicateWithSubpredicates:)](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [init(coder:)](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

# initWithType:subpredicates: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver that a specified type initializes using predicates from a specified array.

## Declaration

```objectivec
- (instancetype) initWithType:(NSCompoundPredicateType) type subpredicates:(NSArray<NSPredicate *> *) subpredicates;
```

## Parameters

- `type`: The type of the new predicate.
- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

The receiver initialized with its type set to type and subpredicates array to `subpredicates`.

<a id="Discussion"></a>

## Discussion

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [andPredicateWithSubpredicates:](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [notPredicateWithSubpredicate:](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [orPredicateWithSubpredicates:](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
