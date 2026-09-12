> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleteresult/result](https://developer.apple.com/documentation/coredata/nsbatchdeleteresult/result)

# result (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value the request returns after it executes.

## Declaration

```swift
var result: Any? { get }
```

<a id="Discussion"></a>

## Discussion

Use [resultType](resulttype.md) to determine the kind of value this property contains, and then cast to the appropriate type as the following example shows:

```swift
// resultType is .resultTypeCount.
guard let count = batchDeleteResult.result as? Int else { return }
            
// resultType is .resultTypeObjectIDs.
guard let objectIDs = batchDeleteResult.result as? [NSManagedObjectID] 
    else { return }
            
// resultType is .resultTypeStatusOnly.
guard let status = batchDeleteResult.result as? Bool else { return }
```

## See Also

### Accessing the Result

- [resultType](resulttype.md): The data type of the request’s result value.
- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.

# result (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value the request returns after it executes.

## Declaration

```objectivec
@property (strong, readonly, nullable) id result;
```

<a id="Discussion"></a>

## Discussion

Use [resultType](resulttype.md) to determine the kind of value this property contains, and then cast to the appropriate type as the following example shows:

```swift
// resultType is .resultTypeCount.
guard let count = batchDeleteResult.result as? Int else { return }
            
// resultType is .resultTypeObjectIDs.
guard let objectIDs = batchDeleteResult.result as? [NSManagedObjectID] 
    else { return }
            
// resultType is .resultTypeStatusOnly.
guard let status = batchDeleteResult.result as? Bool else { return }
```

## See Also

### Accessing the Result

- [resultType](resulttype.md): The data type of the request’s result value.
- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.
