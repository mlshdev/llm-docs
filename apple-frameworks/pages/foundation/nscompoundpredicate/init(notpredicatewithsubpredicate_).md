> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/init(notpredicatewithsubpredicate:)](https://developer.apple.com/documentation/foundation/nscompoundpredicate/init(notpredicatewithsubpredicate:))

# init(notPredicateWithSubpredicate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using a NOT operation on a specified predicate.

## Declaration

```swift
init(notPredicateWithSubpredicate predicate: NSPredicate)
```

## Parameters

- `predicate`: A predicate.

<a id="return-value"></a>

## Return Value

A new predicate formed by NOT-ing the predicate specified by `predicate`.

<a id="Discussion"></a>

## Discussion

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [init(andPredicateWithSubpredicates:)](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [init(orPredicateWithSubpredicates:)](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [init(type:subpredicates:)](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [init(coder:)](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

# notPredicateWithSubpredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using a NOT operation on a specified predicate.

## Declaration

```objectivec
+ (NSCompoundPredicate *) notPredicateWithSubpredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate.

<a id="return-value"></a>

## Return Value

A new predicate formed by NOT-ing the predicate specified by `predicate`.

<a id="Discussion"></a>

## Discussion

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Creating Compound Predicates

- [andPredicateWithSubpredicates:](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [orPredicateWithSubpredicates:](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [initWithType:subpredicates:](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
