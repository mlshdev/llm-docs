> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/removedata(oftypes:modifiedsince:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/removedata(oftypes:modifiedsince:completionhandler:))

# removeData(ofTypes:modifiedSince:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes website data that changed after the specified date.

## Declaration

```swift
func removeData(ofTypes dataTypes: Set<String>, modifiedSince date: Date, completionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
func removeData(ofTypes dataTypes: Set<String>, modifiedSince date: Date) async
```

## Parameters

- `dataTypes`: The website data types to remove.
- `date`: The target date for the data removal. The data store removes data that a website changed after this date.
- `completionHandler`: The completion handler block to execute asynchronously after the web view removes the specified data. This block has no return value and takes no parameters.

<a id="Discussion"></a>

## Discussion

This method removes the specified data type from all records, but only if a website modified the record’s data after the specified `date`.

## See Also

### Removing specific types of data

- [removeData(ofTypes:for:completionHandler:)](removedata%28oftypes_for_completionhandler_%29.md): Removes the specified types of website data from one or more data records.

# removeDataOfTypes:modifiedSince:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes website data that changed after the specified date.

## Declaration

```objectivec
- (void) removeDataOfTypes:(NSSet<NSString *> *) dataTypes modifiedSince:(NSDate *) date completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `dataTypes`: The website data types to remove.
- `date`: The target date for the data removal. The data store removes data that a website changed after this date.
- `completionHandler`: The completion handler block to execute asynchronously after the web view removes the specified data. This block has no return value and takes no parameters.

<a id="Discussion"></a>

## Discussion

This method removes the specified data type from all records, but only if a website modified the record’s data after the specified `date`.

## See Also

### Removing specific types of data

- [removeDataOfTypes:forDataRecords:completionHandler:](removedata%28oftypes_for_completionhandler_%29.md): Removes the specified types of website data from one or more data records.
