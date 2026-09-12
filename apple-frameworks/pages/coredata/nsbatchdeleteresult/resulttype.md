> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleteresult/resulttype](https://developer.apple.com/documentation/coredata/nsbatchdeleteresult/resulttype)

# resultType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data type of the request’s result value.

## Declaration

```swift
var resultType: NSBatchDeleteRequestResultType { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set to the request’s [resultType](../nsbatchdeleterequest/resulttype.md) property.

## See Also

### Accessing the Result

- [result](result.md): The value the request returns after it executes.
- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.

# resultType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data type of the request’s result value.

## Declaration

```objectivec
@property (readonly) NSBatchDeleteRequestResultType resultType;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set to the request’s [resultType](../nsbatchdeleterequest/resulttype.md) property.

## See Also

### Accessing the Result

- [result](result.md): The value the request returns after it executes.
- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.
