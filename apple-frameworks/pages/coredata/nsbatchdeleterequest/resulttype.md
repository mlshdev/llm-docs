> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleterequest/resulttype](https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/resulttype)

# resultType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of result the request provides when it executes.

## Declaration

```swift
var resultType: NSBatchDeleteRequestResultType { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property before you execute the request if you require a result type other than the default of [NSBatchDeleteRequestResultType.resultTypeStatusOnly](../nsbatchdeleterequestresulttype/resulttypestatusonly.md).

## See Also

### Configuring the Result Type

- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.

# resultType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of result the request provides when it executes.

## Declaration

```objectivec
@property NSBatchDeleteRequestResultType resultType;
```

<a id="Discussion"></a>

## Discussion

Set this property before you execute the request if you require a result type other than the default of [NSBatchDeleteResultTypeStatusOnly](../nsbatchdeleterequestresulttype/resulttypestatusonly.md).

## See Also

### Configuring the Result Type

- [NSBatchDeleteRequestResultType](../nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.
