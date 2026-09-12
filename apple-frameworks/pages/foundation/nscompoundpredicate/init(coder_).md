> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/init(coder:)](https://developer.apple.com/documentation/foundation/nscompoundpredicate/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by decoding from the coder you specify.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating Compound Predicates

- [init(andPredicateWithSubpredicates:)](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [init(notPredicateWithSubpredicate:)](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [init(orPredicateWithSubpredicates:)](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [init(type:subpredicates:)](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by decoding from the coder you specify.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating Compound Predicates

- [andPredicateWithSubpredicates:](init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [notPredicateWithSubpredicate:](init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [orPredicateWithSubpredicates:](init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [initWithType:subpredicates:](init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
