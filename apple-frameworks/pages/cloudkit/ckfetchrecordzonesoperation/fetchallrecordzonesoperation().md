> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/fetchallrecordzonesoperation()

# fetchAllRecordZonesOperation() (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns an operation for fetching all record zones in the current database.

## Declaration

```swift
class func fetchAllRecordZonesOperation() -> Self
```

<a id="discussion"></a>

## Discussion

Assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property of the operation that this method returns so that you can process the results.

# fetchAllRecordZonesOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns an operation for fetching all record zones in the current database.

## Declaration

```objectivec
+ (instancetype) fetchAllRecordZonesOperation;
```

<a id="discussion"></a>

## Discussion

Assign a value to the [fetchRecordZonesCompletionBlock](fetchrecordzonescompletionblock.md) property of the operation that this method returns so that you can process the results.
