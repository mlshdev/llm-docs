> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/fetchdatarecord(oftypes:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/fetchdatarecord(oftypes:for:completionhandler:))

# fetchDataRecord(ofTypes:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Fetches a data record containing the given extension data types for a specific known web extension context.

## Declaration

```swift
func fetchDataRecord(ofTypes dataTypes: Set<WKWebExtension.DataType>, for extensionContext: WKWebExtensionContext, completionHandler: @escaping (WKWebExtension.DataRecord?) -> Void)
```

```swift
func dataRecord(ofTypes dataTypes: Set<WKWebExtension.DataType>, for extensionContext: WKWebExtensionContext) async -> WKWebExtension.DataRecord?
```

## Parameters

- `dataTypes`: The extension data types to fetch records for.
- `extensionContext`: The specific web extension context to fetch records for.
- `completionHandler`: A block to invoke when the data record has been fetched.

<a id="discussion"></a>

## Discussion

> **Note**

> The extension does not need to be loaded to be included in the result.

# fetchDataRecordOfTypes:forExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Fetches a data record containing the given extension data types for a specific known web extension context.

## Declaration

```objectivec
- (void) fetchDataRecordOfTypes:(NSSet<NSString *> *) dataTypes forExtensionContext:(WKWebExtensionContext *) extensionContext completionHandler:(void (^)(WKWebExtensionDataRecord *)) completionHandler;
```

## Parameters

- `dataTypes`: The extension data types to fetch records for.
- `extensionContext`: The specific web extension context to fetch records for.
- `completionHandler`: A block to invoke when the data record has been fetched.

<a id="discussion"></a>

## Discussion

> **Note**

> The extension does not need to be loaded to be included in the result.
