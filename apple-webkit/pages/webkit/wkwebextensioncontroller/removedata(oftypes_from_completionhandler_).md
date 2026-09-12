> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/removedata(oftypes:from:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/removedata(oftypes:from:completionhandler:))

# removeData(ofTypes:from:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Removes extension data of the given types for the given data records.

## Declaration

```swift
func removeData(ofTypes dataTypes: Set<WKWebExtension.DataType>, from dataRecords: [WKWebExtension.DataRecord], completionHandler: @escaping () -> Void)
```

```swift
func removeData(ofTypes dataTypes: Set<WKWebExtension.DataType>, from dataRecords: [WKWebExtension.DataRecord]) async
```

## Parameters

- `dataTypes`: The extension data types that should be removed.
- `dataRecords`: The extension data records to delete data from.
- `completionHandler`: A block to invoke when the data has been removed.

# removeDataOfTypes:fromDataRecords:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Removes extension data of the given types for the given data records.

## Declaration

```objectivec
- (void) removeDataOfTypes:(NSSet<NSString *> *) dataTypes fromDataRecords:(NSArray<WKWebExtensionDataRecord *> *) dataRecords completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `dataTypes`: The extension data types that should be removed.
- `dataRecords`: The extension data records to delete data from.
- `completionHandler`: A block to invoke when the data has been removed.
