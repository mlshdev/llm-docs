> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordchangesoperation/desiredkeys](https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/desiredkeys)

# desiredKeys (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The fields to fetch for the requested records.

## Declaration

```swift
var desiredKeys: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that the system retrieves for each record during the fetch operation. This property contains an array of strings, each of which contains the name of a field from the target records. When you retrieve a record, the returned records only include fields with names that match one of the keys in this property. The default value is `nil`, which causes the system to fetch all keys of the record.

Because you can fetch records of different types, configure the array to include the merged set of all field names for the requested records and at least one field name from each record type.

If you intend to specify the desired set of keys, set the value of this property before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.

# desiredKeys (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The fields to fetch for the requested records.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * desiredKeys;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that the system retrieves for each record during the fetch operation. This property contains an array of strings, each of which contains the name of a field from the target records. When you retrieve a record, the returned records only include fields with names that match one of the keys in this property. The default value is `nil`, which causes the system to fetch all keys of the record.

Because you can fetch records of different types, configure the array to include the merged set of all field names for the requested records and at least one field name from each record type.

If you intend to specify the desired set of keys, set the value of this property before executing the operation or submitting it to a queue.

## See Also

### Configuring the Fetch Record Changes Operation

- [recordZoneID](recordzoneid.md): Deprecated. The ID of the record zone with the records you want to fetch.
- [previousServerChangeToken](previousserverchangetoken.md): Deprecated. The token that identifies the starting point for retrieving changes.
- [resultsLimit](resultslimit.md): Deprecated. The maximum number of changed records to report with this operation object.
- [moreComing](morecoming.md): Deprecated. A Boolean value that indicates whether more results are available.
