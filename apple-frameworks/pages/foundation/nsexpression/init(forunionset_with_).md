> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/init(forunionset:with:)](https://developer.apple.com/documentation/foundation/nsexpression/init(forunionset:with:))

# init(forUnionSet:with:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression object that represents the union of a specified set and collection.

## Declaration

```swift
init(forUnionSet left: NSExpression, with right: NSExpression)
```

## Parameters

- `left`: An expression that evaluates to an `NSSet` object.
- `right`: An expression that evaluates to a collection object (an instance of `NSArray`, `NSSet`, or `NSDictionary`).

<a id="return-value"></a>

## Return Value

An new `NSExpression` object that represents the union of `left` and `right`.

## See Also

### Creating a Collection Expression

- [init(forAggregate:)](init%28foraggregate_%29.md): Creates an aggregate expression for a specified collection.
- [init(forIntersectSet:with:)](init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [init(forMinusSet:with:)](init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.

# expressionForUnionSet:with: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an expression object that represents the union of a specified set and collection.

## Declaration

```objectivec
+ (NSExpression *) expressionForUnionSet:(NSExpression *) left with:(NSExpression *) right;
```

## Parameters

- `left`: An expression that evaluates to an `NSSet` object.
- `right`: An expression that evaluates to a collection object (an instance of `NSArray`, `NSSet`, or `NSDictionary`).

<a id="return-value"></a>

## Return Value

An new `NSExpression` object that represents the union of `left` and `right`.

## See Also

### Creating a Collection Expression

- [expressionForAggregate:](init%28foraggregate_%29.md): Creates an aggregate expression for a specified collection.
- [expressionForIntersectSet:with:](init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [expressionForMinusSet:with:](init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.
