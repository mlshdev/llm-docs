> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/shouldfetchrootrecord](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/shouldfetchrootrecord)

# shouldFetchRootRecord (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to retrieve the root record.

## Declaration

```swift
var shouldFetchRootRecord: Bool { get set }
```

<a id="discussion"></a>

## Discussion

For a shared record hierarchy, set this property to [true](https://developer.apple.com/documentation/swift/true) to include the root record in the fetched share metadata. CloudKit ignores this property for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Operation

- [shareURLs](shareurls.md): The URLs of the shares to fetch.

# shouldFetchRootRecord (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to retrieve the root record.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldFetchRootRecord;
```

<a id="discussion"></a>

## Discussion

For a shared record hierarchy, set this property to [true](https://developer.apple.com/documentation/swift/true) to include the root record in the fetched share metadata. CloudKit ignores this property for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Operation

- [rootRecordDesiredKeys](rootrecorddesiredkeys-7gvr5.md): The fields to return when fetching the root record.
- [shareURLs](shareurls.md): The URLs of the shares to fetch.
