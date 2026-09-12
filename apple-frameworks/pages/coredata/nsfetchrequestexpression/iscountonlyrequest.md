> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequestexpression/iscountonlyrequest](https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/iscountonlyrequest)

# isCountOnlyRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

## Declaration

```swift
var isCountOnlyRequest: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents a count-only fetch request, otherwise [false](https://developer.apple.com/documentation/swift/false). If this method returns [false](https://developer.apple.com/documentation/swift/false), the managed object context (from the [contextExpression](contextexpression.md)) will perform [fetch(\_:)](../nsmanagedobjectcontext/fetch%28__%29-38ys1.md): with the [requestExpression](requestexpression.md); if this method returns [true](https://developer.apple.com/documentation/swift/true), the managed object context will perform [count(for:)](../nsmanagedobjectcontext/count%28for_%29-93zbm.md) with the [requestExpression](requestexpression.md).

## See Also

### Examining a Fetch Request Expression

- [requestExpression](requestexpression.md): The expression for the receiver’s fetch request.
- [contextExpression](contextexpression.md): The expression for the receiver’s managed object context.

# countOnlyRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

## Declaration

```objectivec
@property (readonly, getter=isCountOnlyRequest) BOOL countOnlyRequest;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents a count-only fetch request, otherwise [false](https://developer.apple.com/documentation/swift/false). If this method returns [false](https://developer.apple.com/documentation/swift/false), the managed object context (from the [contextExpression](contextexpression.md)) will perform [fetch(\_:)](../nsmanagedobjectcontext/fetch%28__%29-38ys1.md): with the [requestExpression](requestexpression.md); if this method returns [true](https://developer.apple.com/documentation/swift/true), the managed object context will perform [countForFetchRequest:error:](../nsmanagedobjectcontext/count%28for_%29-93zbm.md) with the [requestExpression](requestexpression.md).

## See Also

### Examining a Fetch Request Expression

- [requestExpression](requestexpression.md): The expression for the receiver’s fetch request.
- [contextExpression](contextexpression.md): The expression for the receiver’s managed object context.
