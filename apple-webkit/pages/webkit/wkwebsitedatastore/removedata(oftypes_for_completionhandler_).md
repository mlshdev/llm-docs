> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/removedata(oftypes:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/removedata(oftypes:for:completionhandler:))

# removeData(ofTypes:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes the specified types of website data from one or more data records.

## Declaration

```swift
func removeData(ofTypes dataTypes: Set<String>, for dataRecords: [WKWebsiteDataRecord], completionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
func removeData(ofTypes dataTypes: Set<String>, for dataRecords: [WKWebsiteDataRecord]) async
```

## Parameters

- `dataTypes`: The website data types to remove from the records.
- `dataRecords`: The records that contain the data.
- `completionHandler`: The completion handler block to execute asynchronously after the web view removes the specified data. This block has no return value and takes no parameters.

## See Also

### Removing specific types of data

- [removeData(ofTypes:modifiedSince:completionHandler:)](removedata%28oftypes_modifiedsince_completionhandler_%29.md): Removes website data that changed after the specified date.

# removeDataOfTypes:forDataRecords:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes the specified types of website data from one or more data records.

## Declaration

```objectivec
- (void) removeDataOfTypes:(NSSet<NSString *> *) dataTypes forDataRecords:(NSArray<WKWebsiteDataRecord *> *) dataRecords completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `dataTypes`: The website data types to remove from the records.
- `dataRecords`: The records that contain the data.
- `completionHandler`: The completion handler block to execute asynchronously after the web view removes the specified data. This block has no return value and takes no parameters.

## See Also

### Removing specific types of data

- [removeDataOfTypes:modifiedSince:completionHandler:](removedata%28oftypes_modifiedsince_completionhandler_%29.md): Removes website data that changed after the specified date.
