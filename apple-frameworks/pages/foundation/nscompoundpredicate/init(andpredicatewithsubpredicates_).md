> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/init(andpredicatewithsubpredicates:)](https://developer.apple.com/documentation/foundation/nscompoundpredicate/init(andpredicatewithsubpredicates:))

# init(andPredicateWithSubpredicates:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using an AND operation on the predicates in a specified array.

## Declaration

```swift
init(andPredicateWithSubpredicates subpredicates: [NSPredicate])
```

## Parameters

- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

A new predicate formed by AND-ing the predicates specified by `subpredicates`.

<a id="Discussion"></a>

## Discussion

An AND predicate with no subpredicates evaluates to TRUE.

<a id="Special-Considerations"></a>

### Special Considerations

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)

### Creating Compound Predicates

- [init(notPredicateWithSubpredicate:)](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [init(orPredicateWithSubpredicates:)](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [init(type:subpredicates:)](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [init(coder:)](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

# andPredicateWithSubpredicates: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate that you form using an AND operation on the predicates in a specified array.

## Declaration

```objectivec
+ (NSCompoundPredicate *) andPredicateWithSubpredicates:(NSArray<NSPredicate *> *) subpredicates;
```

## Parameters

- `subpredicates`: An array of `NSPredicate` objects.

<a id="return-value"></a>

## Return Value

A new predicate formed by AND-ing the predicates specified by `subpredicates`.

<a id="Discussion"></a>

## Discussion

An AND predicate with no subpredicates evaluates to TRUE.

<a id="Special-Considerations"></a>

### Special Considerations

For applications linked on macOS 10.5 or later, the `subpredicates` array is copied. For applications linked on OS X v10.4, the `subpredicates` array is retained (for binary compatibility).

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)

### Creating Compound Predicates

- [notPredicateWithSubpredicate:](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [orPredicateWithSubpredicates:](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [initWithType:subpredicates:](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
