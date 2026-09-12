> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/shareurls](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/shareurls)

# shareURLs (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The URLs of the shares to fetch.

## Declaration

```swift
var shareURLs: [URL]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the URLs of the shares to fetch. If you intend to specify or change this property’s value, do so before you execute the operation or submit it to a queue.

## See Also

### Configuring the Operation

- [shouldFetchRootRecord](shouldfetchrootrecord.md): A Boolean value that indicates whether to retrieve the root record.

# shareURLs (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The URLs of the shares to fetch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSURL *> * shareURLs;
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the URLs of the shares to fetch. If you intend to specify or change this property’s value, do so before you execute the operation or submit it to a queue.

## See Also

### Configuring the Operation

- [rootRecordDesiredKeys](rootrecorddesiredkeys-7gvr5.md): The fields to return when fetching the root record.
- [shouldFetchRootRecord](shouldfetchrootrecord.md): A Boolean value that indicates whether to retrieve the root record.
