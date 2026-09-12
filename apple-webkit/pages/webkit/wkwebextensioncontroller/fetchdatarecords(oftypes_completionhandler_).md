> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/fetchdatarecords(oftypes:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/fetchdatarecords(oftypes:completionhandler:))

# fetchDataRecords(ofTypes:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Fetches data records containing the given extension data types for all known extensions.

## Declaration

```swift
func fetchDataRecords(ofTypes dataTypes: Set<WKWebExtension.DataType>, completionHandler: @escaping ([WKWebExtension.DataRecord]) -> Void)
```

```swift
func dataRecords(ofTypes dataTypes: Set<WKWebExtension.DataType>) async -> [WKWebExtension.DataRecord]
```

## Parameters

- `dataTypes`: The extension data types to fetch records for.
- `completionHandler`: A block to invoke when the data records have been fetched.

<a id="discussion"></a>

## Discussion

> **Note**

> The extension does not need to be loaded to be included in the result.

# fetchDataRecordsOfTypes:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Fetches data records containing the given extension data types for all known extensions.

## Declaration

```objectivec
- (void) fetchDataRecordsOfTypes:(NSSet<NSString *> *) dataTypes completionHandler:(void (^)(NSArray<WKWebExtensionDataRecord *> *)) completionHandler;
```

## Parameters

- `dataTypes`: The extension data types to fetch records for.
- `completionHandler`: A block to invoke when the data records have been fetched.

<a id="discussion"></a>

## Discussion

> **Note**

> The extension does not need to be loaded to be included in the result.
