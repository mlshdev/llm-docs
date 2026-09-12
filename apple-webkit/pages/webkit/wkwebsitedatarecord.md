> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatarecord](https://developer.apple.com/documentation/webkit/wkwebsitedatarecord)

# WKWebsiteDataRecord (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A record of the data that a particular website stores persistently.

## Declaration

```swift
@MainActor class WKWebsiteDataRecord
```

<a id="overview"></a>

## Overview

Use [WKWebsiteDataRecord](wkwebsitedatarecord.md) objects to discover the types of information that a website stores. Records identify the data types a website stores, but don’t identify the actual data. You might use this information to help the user manage website data. For example, Safari provides a way for users to view and remove website data. The domain name of each record contains the website’s domain name and suffix.

You don’t create [WKWebsiteDataRecord](wkwebsitedatarecord.md) objects directly. WebKit creates these records and stores them in the web view’s data store. Use the [fetchDataRecords(ofTypes:completionHandler:)](wkwebsitedatastore/fetchdatarecords%28oftypes_completionhandler_%29.md) of that data store to retrieve the current record objects. You also use that object to remove unwanted records.

## Topics

### Getting the Record Information

- [displayName](wkwebsitedatarecord/displayname.md): The display name for the data record.

### Getting the Data Type

- [dataTypes](wkwebsitedatarecord/datatypes.md): The types of data associated with the record.
- [Data Store Record Types](data-store-record-types.md): Explore the constants that identify the types of data that websites store.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

# WKWebsiteDataRecord (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A record of the data that a particular website stores persistently.

## Declaration

```objectivec
@interface WKWebsiteDataRecord : NSObject
```

<a id="overview"></a>

## Overview

Use [WKWebsiteDataRecord](wkwebsitedatarecord.md) objects to discover the types of information that a website stores. Records identify the data types a website stores, but don’t identify the actual data. You might use this information to help the user manage website data. For example, Safari provides a way for users to view and remove website data. The domain name of each record contains the website’s domain name and suffix.

You don’t create [WKWebsiteDataRecord](wkwebsitedatarecord.md) objects directly. WebKit creates these records and stores them in the web view’s data store. Use the [fetchDataRecordsOfTypes:completionHandler:](wkwebsitedatastore/fetchdatarecords%28oftypes_completionhandler_%29.md) of that data store to retrieve the current record objects. You also use that object to remove unwanted records.

## Topics

### Getting the Record Information

- [displayName](wkwebsitedatarecord/displayname.md): The display name for the data record.

### Getting the Data Type

- [dataTypes](wkwebsitedatarecord/datatypes.md): The types of data associated with the record.
- [Data Store Record Types](data-store-record-types.md): Explore the constants that identify the types of data that websites store.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
