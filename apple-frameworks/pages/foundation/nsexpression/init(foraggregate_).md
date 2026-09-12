> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(foraggregate:)](https://developer.apple.com/documentation/foundation/nsexpression/init(foraggregate:))

# init(forAggregate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an aggregate expression for a specified collection.

## Declaration

```swift
init(forAggregate subexpressions: [NSExpression])
```

## Parameters

- `subexpressions`: A collection object (an instance of `NSArray`, `NSSet`, or `NSDictionary`) that contains further expressions.

<a id="return-value"></a>

## Return Value

A new expression that contains the expressions in `collection`.

## See Also

### Creating a Collection Expression

- [init(forUnionSet:with:)](init%28forunionset_with_%29.md): Creates an expression object that represents the union of a specified set and collection.
- [init(forIntersectSet:with:)](init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [init(forMinusSet:with:)](init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.

# expressionForAggregate: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an aggregate expression for a specified collection.

## Declaration

```objectivec
+ (NSExpression *) expressionForAggregate:(NSArray<NSExpression *> *) subexpressions;
```

## Parameters

- `subexpressions`: A collection object (an instance of `NSArray`, `NSSet`, or `NSDictionary`) that contains further expressions.

<a id="return-value"></a>

## Return Value

A new expression that contains the expressions in `collection`.

## See Also

### Creating a Collection Expression

- [expressionForUnionSet:with:](init%28forunionset_with_%29.md): Creates an expression object that represents the union of a specified set and collection.
- [expressionForIntersectSet:with:](init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [expressionForMinusSet:with:](init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.
