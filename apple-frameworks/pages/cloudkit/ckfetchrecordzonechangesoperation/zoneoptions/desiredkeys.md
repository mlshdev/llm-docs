> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions/desiredkeys](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneoptions/desiredkeys)

# desiredKeys (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

The fields to fetch for the requested records.

## Declaration

```swift
var desiredKeys: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that CloudKit retrieves for each record during the fetch operation. This property contains an array of strings, each of which is the name of a field from the target records. When you retrieve a record, CloudKit only includes fields with names that match one of the keys in this property. The default value is `nil`, which causes CloudKit to fetch all of the record’s keys.

Because you can fetch records of different types, configure the array to include the merged set of all field names for the requested records and at least one field name from each record type.

If you intend to specify the desired set of keys, set the value of this property before executing the operation or submitting it to a queue.

## See Also

### Zone Change Options

- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of records to fetch from the record zone.

# desiredKeys (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

The fields to fetch for the requested records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * desiredKeys;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that CloudKit retrieves for each record during the fetch operation. This property contains an array of strings, each of which is the name of a field from the target records. When you retrieve a record, CloudKit only includes fields with names that match one of the keys in this property. The default value is `nil`, which causes CloudKit to fetch all of the record’s keys.

Because you can fetch records of different types, configure the array to include the merged set of all field names for the requested records and at least one field name from each record type.

If you intend to specify the desired set of keys, set the value of this property before executing the operation or submitting it to a queue.

## See Also

### Zone Change Options

- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of records to fetch from the record zone.
