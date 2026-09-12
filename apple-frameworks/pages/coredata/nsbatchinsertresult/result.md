> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertresult/result](https://developer.apple.com/documentation/coredata/nsbatchinsertresult/result)

# result (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The result of a batch-insertion request.

## Declaration

```swift
var result: Any? { get }
```

<a id="Discussion"></a>

## Discussion

Cast the result to the type corresponding to [resultType](resulttype.md) to inspect it. The following example shows how to inspect a result type of [NSBatchInsertRequestResultType.statusOnly](../nsbatchinsertrequestresulttype/statusonly.md).

```swift
let success = batchInsertResult.result as? Bool
```

## See Also

### Accessing Results

- [resultType](resulttype.md): The type of result that Core Data returns from this request.
- [NSBatchInsertRequestResultType](../nsbatchinsertrequestresulttype.md): Result types for a batch-insertion request.

# result (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The result of a batch-insertion request.

## Declaration

```objectivec
@property (strong, readonly, nullable) id result;
```

<a id="Discussion"></a>

## Discussion

Cast the result to the type corresponding to [resultType](resulttype.md) to inspect it. The following example shows how to inspect a result type of [NSBatchInsertRequestResultTypeStatusOnly](../nsbatchinsertrequestresulttype/statusonly.md).

```swift
let success = batchInsertResult.result as? Bool
```

## See Also

### Accessing Results

- [resultType](resulttype.md): The type of result that Core Data returns from this request.
- [NSBatchInsertRequestResultType](../nsbatchinsertrequestresulttype.md): Result types for a batch-insertion request.
