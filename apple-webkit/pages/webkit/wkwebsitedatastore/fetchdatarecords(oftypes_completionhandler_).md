> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/fetchdatarecords(oftypes:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/fetchdatarecords(oftypes:completionhandler:))

# fetchDataRecords(ofTypes:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Fetches the specified types of records from the data store.

## Declaration

```swift
func fetchDataRecords(ofTypes dataTypes: Set<String>, completionHandler: @escaping @MainActor @Sendable ([WKWebsiteDataRecord]) -> Void)
```

```swift
func dataRecords(ofTypes dataTypes: Set<String>) async -> [WKWebsiteDataRecord]
```

## Parameters

- `dataTypes`: The types of records to fetch. For a list of all possible types, see [Data Store Record Types](../data-store-record-types.md). To specify all types, specify the set returned by the [allWebsiteDataTypes()](allwebsitedatatypes%28%29.md) method.
- `completionHandler`: The completion handler block to execute asynchronously with the results. This block has no return value and takes the following parameter:

  - **dataRecordArray**: An array of [WKWebsiteDataRecord](../wkwebsitedatarecord.md) objects. Each object in this array corresponds to data for one of the requested types. If no records of the requested types exist, this array is empty.

<a id="Discussion"></a>

## Discussion

Call this method to retrieve information about the types of data that the website saves. The returned records don’t include the data itself, but contain information that you can convey to the user. For example, you might use the returned data records to display the cookies a website uses, or to show which websites cache data.

## See Also

### Retrieving specific types of data

- [allWebsiteDataTypes()](allwebsitedatatypes%28%29.md): Returns the set of all the available data types.

# fetchDataRecordsOfTypes:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Fetches the specified types of records from the data store.

## Declaration

```objectivec
- (void) fetchDataRecordsOfTypes:(NSSet<NSString *> *) dataTypes completionHandler:(void (^)(NSArray<WKWebsiteDataRecord *> *)) completionHandler;
```

## Parameters

- `dataTypes`: The types of records to fetch. For a list of all possible types, see [Data Store Record Types](../data-store-record-types.md). To specify all types, specify the set returned by the [allWebsiteDataTypes](allwebsitedatatypes%28%29.md) method.
- `completionHandler`: The completion handler block to execute asynchronously with the results. This block has no return value and takes the following parameter:

  - **dataRecordArray**: An array of [WKWebsiteDataRecord](../wkwebsitedatarecord.md) objects. Each object in this array corresponds to data for one of the requested types. If no records of the requested types exist, this array is empty.

<a id="Discussion"></a>

## Discussion

Call this method to retrieve information about the types of data that the website saves. The returned records don’t include the data itself, but contain information that you can convey to the user. For example, you might use the returned data records to display the cookies a website uses, or to show which websites cache data.

## See Also

### Retrieving specific types of data

- [allWebsiteDataTypes](allwebsitedatatypes%28%29.md): Returns the set of all the available data types.
