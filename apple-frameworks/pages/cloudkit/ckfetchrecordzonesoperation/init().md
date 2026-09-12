> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation/init()](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch zones operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set the [recordZoneIDs](recordzoneids.md) property before you execute the operation.

After creating the operation, assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property so you can process the results.

## See Also

### Initializing the Zone Fetch Operation

- [init(recordZoneIDs:)](init%28recordzoneids_%29.md): Creates an operation for fetching the specified record zones.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch zones operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set the [recordZoneIDs](recordzoneids.md) property before you execute the operation.

After creating the operation, assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property so you can process the results.

## See Also

### Initializing the Zone Fetch Operation

- [initWithRecordZoneIDs:](init%28recordzoneids_%29.md): Creates an operation for fetching the specified record zones.
