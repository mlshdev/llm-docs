> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/init(orpredicatewithsubpredicates:)](https://developer.apple.com/documentation/foundation/nscompoundpredicate/init(orpredicatewithsubpredicates:))

# init(orPredicateWithSubpredicates:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using an OR operation on the predicates in a specified array.

## Declaration

```swift
init(orPredicateWithSubpredicates subpredicates: [NSPredicate])
```

## Parameters

- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

A new predicate formed by OR-ing the predicates specified by `subpredicates`.

<a id="Discussion"></a>

## Discussion

An OR predicate with no subpredicates evaluates to FALSE.

<a id="Special-Considerations"></a>

### Special Considerations

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [init(andPredicateWithSubpredicates:)](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [init(notPredicateWithSubpredicate:)](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [init(type:subpredicates:)](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [init(coder:)](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

# orPredicateWithSubpredicates: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using an OR operation on the predicates in a specified array.

## Declaration

```objectivec
+ (NSCompoundPredicate *) orPredicateWithSubpredicates:(NSArray<NSPredicate *> *) subpredicates;
```

## Parameters

- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

A new predicate formed by OR-ing the predicates specified by `subpredicates`.

<a id="Discussion"></a>

## Discussion

An OR predicate with no subpredicates evaluates to FALSE.

<a id="Special-Considerations"></a>

### Special Considerations

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [andPredicateWithSubpredicates:](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [notPredicateWithSubpredicate:](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [initWithType:subpredicates:](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
