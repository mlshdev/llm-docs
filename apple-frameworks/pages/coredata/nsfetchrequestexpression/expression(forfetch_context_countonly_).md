> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequestexpression/expression(forfetch:context:countonly:)](https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/expression(forfetch:context:countonly:))

# expression(forFetch:context:countOnly:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an expression which will evaluate to the result of executing a fetch request on a context.

## Declaration

```swift
class func expression(forFetch fetch: NSExpression, context: NSExpression, countOnly countFlag: Bool) -> NSExpression
```

## Parameters

- `fetch`: An expression that evaluates to an instance of `NSFetchRequest`.
- `context`: An expression that evaluates to an instance of `NSManagedObjectContext`.
- `countFlag`: If [true](https://developer.apple.com/documentation/swift/true), when the new expression is evaluated the managed object context (from `context`) will perform [count(for:)](../nsmanagedobjectcontext/count%28for_%29-93zbm.md) with the fetch request (from `fetch`). If [false](https://developer.apple.com/documentation/swift/false), when the new expression is evaluated the managed object context will perform [fetch(\_:)](../nsmanagedobjectcontext/fetch%28__%29-38ys1.md) with the fetch request.

<a id="return-value"></a>

## Return Value

An expression which will evaluate to the result of executing a fetch request (from `fetch`) on a managed object context (from `context`).

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

# expressionForFetch:context:countOnly: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an expression which will evaluate to the result of executing a fetch request on a context.

## Declaration

```objectivec
+ (NSExpression *) expressionForFetch:(NSExpression *) fetch context:(NSExpression *) context countOnly:(BOOL) countFlag;
```

## Parameters

- `fetch`: An expression that evaluates to an instance of `NSFetchRequest`.
- `context`: An expression that evaluates to an instance of `NSManagedObjectContext`.
- `countFlag`: If [true](https://developer.apple.com/documentation/swift/true), when the new expression is evaluated the managed object context (from `context`) will perform [countForFetchRequest:error:](../nsmanagedobjectcontext/count%28for_%29-93zbm.md) with the fetch request (from `fetch`). If [false](https://developer.apple.com/documentation/swift/false), when the new expression is evaluated the managed object context will perform [fetch(\_:)](../nsmanagedobjectcontext/fetch%28__%29-38ys1.md) with the fetch request.

<a id="return-value"></a>

## Return Value

An expression which will evaluate to the result of executing a fetch request (from `fetch`) on a managed object context (from `context`).

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
