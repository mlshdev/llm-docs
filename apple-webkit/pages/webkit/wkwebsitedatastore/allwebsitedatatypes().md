> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/allwebsitedatatypes()](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/allwebsitedatatypes())

# allWebsiteDataTypes() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the set of all the available data types.

## Declaration

```swift
class func allWebsiteDataTypes() -> Set<String>
```

<a id="Discussion"></a>

## Discussion

Potential values in the set are [WKWebsiteDataRecord](../wkwebsitedatarecord.md) constants.

## See Also

### Retrieving specific types of data

- [fetchDataRecords(ofTypes:completionHandler:)](fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches the specified types of records from the data store.

# allWebsiteDataTypes (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the set of all the available data types.

## Declaration

```objectivec
+ (NSSet<NSString *> *) allWebsiteDataTypes;
```

<a id="Discussion"></a>

## Discussion

Potential values in the set are [WKWebsiteDataRecord](../wkwebsitedatarecord.md) constants.

## See Also

### Retrieving specific types of data

- [fetchDataRecordsOfTypes:completionHandler:](fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches the specified types of records from the data store.
