> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordsoperation/init()](https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set the [recordIDs](recordids.md) property before you execute the operation.

A fetch operation retrieves all of a record’s fields, including any assets that those fields reference. If you want to minimize the amount of data that the operation returns, configure the [desiredKeys](desiredkeys-34l1l.md) property with only the keys that contain the values that you have an interest in.

After initializing the operation, you must associate at least one progress handler with the operation (excluding the completion handler) to process the results.

## See Also

### Creating a Record Fetch Operation

- [init(recordIDs:)](init%28recordids_%29.md): Creates a fetch operation for retrieving the records with the specified IDs.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set the [recordIDs](recordids.md) property before you execute the operation.

A fetch operation retrieves all of a record’s fields, including any assets that those fields reference. If you want to minimize the amount of data that the operation returns, configure the [desiredKeys](desiredkeys-34l1l.md) property with only the keys that contain the values that you have an interest in.

After initializing the operation, you must associate at least one progress handler with the operation (excluding the completion handler) to process the results.

## See Also

### Creating a Record Fetch Operation

- [initWithRecordIDs:](init%28recordids_%29.md): Creates a fetch operation for retrieving the records with the specified IDs.
