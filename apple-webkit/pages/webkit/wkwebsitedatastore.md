> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore](https://developer.apple.com/documentation/webkit/wkwebsitedatastore)

# WKWebsiteDataStore (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that manages cookies, disk and memory caches, and other types of data for a web view.

## Declaration

```swift
@MainActor class WKWebsiteDataStore
```

<a id="overview"></a>

## Overview

Use a [WKWebsiteDataStore](wkwebsitedatastore.md) object to configure and manage web site data. Specifically, use this object to:

- Manage cookies that your web site uses
- Learn about the types of data that websites store
- Remove unwanted web site data

Create a data store object and assign it to the [websiteDataStore](wkwebviewconfiguration/websitedatastore.md) property of a [WKWebViewConfiguration](wkwebviewconfiguration.md) object before you create your web view.

By default, `WKWebViewConfiguration` uses the default data store returned by the [default()](wkwebsitedatastore/default%28%29.md) method, which saves website data persistently to disk.

To implement private browsing, create a nonpersistent data store using the [nonPersistent()](wkwebsitedatastore/nonpersistent%28%29.md) method instead.

To implement profile browsing, create a persistent data store using the [init(forIdentifier:)](wkwebsitedatastore/init%28foridentifier_%29.md) method, passing an identifier that you use to identify the data store.

## Topics

### Creating a data store object

- [default()](wkwebsitedatastore/default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [nonPersistent()](wkwebsitedatastore/nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.
- [init(forIdentifier:)](wkwebsitedatastore/init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.

### Finding data stores

- [fetchAllDataStoreIdentifiers(\_:)](wkwebsitedatastore/fetchalldatastoreidentifiers%28__%29.md): Fetches an array of identifiers from existing data stores that have identifiers.

### Inspecting data store properties

- [identifier](wkwebsitedatastore/identifier.md): An identifier that uniquely identifies a data store.
- [isPersistent](wkwebsitedatastore/ispersistent.md): A Boolean value that indicates whether this object stores data to disk.

### Retrieving a cookie store

- [httpCookieStore](wkwebsitedatastore/httpcookiestore.md): The object that manages the HTTP cookies for your website.

### Retrieving specific types of data

- [fetchDataRecords(ofTypes:completionHandler:)](wkwebsitedatastore/fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches the specified types of records from the data store.
- [allWebsiteDataTypes()](wkwebsitedatastore/allwebsitedatatypes%28%29.md): Returns the set of all the available data types.

### Removing specific types of data

- [removeData(ofTypes:for:completionHandler:)](wkwebsitedatastore/removedata%28oftypes_for_completionhandler_%29.md): Removes the specified types of website data from one or more data records.
- [removeData(ofTypes:modifiedSince:completionHandler:)](wkwebsitedatastore/removedata%28oftypes_modifiedsince_completionhandler_%29.md): Removes website data that changed after the specified date.

### Removing a data store

- [remove(forIdentifier:completionHandler:)](wkwebsitedatastore/remove%28foridentifier_completionhandler_%29.md): Removes the data store that matches the identifier you provide.

### Initializers

- [init(coder:)](wkwebsitedatastore/init%28coder_%29.md)

### Instance Properties

- [proxyConfigurations](wkwebsitedatastore/proxyconfigurations-cdc1.md)

### Instance Methods

- [fetchData(of:completionHandler:)](wkwebsitedatastore/fetchdata%28of_completionhandler_%29.md)
- [restoreData(\_:completionHandler:)](wkwebsitedatastore/restoredata%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web data management

- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

# WKWebsiteDataStore (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that manages cookies, disk and memory caches, and other types of data for a web view.

## Declaration

```objectivec
@interface WKWebsiteDataStore : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKWebsiteDataStore](wkwebsitedatastore.md) object to configure and manage web site data. Specifically, use this object to:

- Manage cookies that your web site uses
- Learn about the types of data that websites store
- Remove unwanted web site data

Create a data store object and assign it to the [websiteDataStore](wkwebviewconfiguration/websitedatastore.md) property of a [WKWebViewConfiguration](wkwebviewconfiguration.md) object before you create your web view.

By default, `WKWebViewConfiguration` uses the default data store returned by the [defaultDataStore](wkwebsitedatastore/default%28%29.md) method, which saves website data persistently to disk.

To implement private browsing, create a nonpersistent data store using the [nonPersistentDataStore](wkwebsitedatastore/nonpersistent%28%29.md) method instead.

To implement profile browsing, create a persistent data store using the [dataStoreForIdentifier:](wkwebsitedatastore/init%28foridentifier_%29.md) method, passing an identifier that you use to identify the data store.

## Topics

### Creating a data store object

- [defaultDataStore](wkwebsitedatastore/default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [nonPersistentDataStore](wkwebsitedatastore/nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.
- [dataStoreForIdentifier:](wkwebsitedatastore/init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.

### Finding data stores

- [fetchAllDataStoreIdentifiers:](wkwebsitedatastore/fetchalldatastoreidentifiers%28__%29.md): Fetches an array of identifiers from existing data stores that have identifiers.

### Inspecting data store properties

- [identifier](wkwebsitedatastore/identifier.md): An identifier that uniquely identifies a data store.
- [persistent](wkwebsitedatastore/ispersistent.md): A Boolean value that indicates whether this object stores data to disk.

### Retrieving a cookie store

- [httpCookieStore](wkwebsitedatastore/httpcookiestore.md): The object that manages the HTTP cookies for your website.

### Retrieving specific types of data

- [fetchDataRecordsOfTypes:completionHandler:](wkwebsitedatastore/fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches the specified types of records from the data store.
- [allWebsiteDataTypes](wkwebsitedatastore/allwebsitedatatypes%28%29.md): Returns the set of all the available data types.

### Removing specific types of data

- [removeDataOfTypes:forDataRecords:completionHandler:](wkwebsitedatastore/removedata%28oftypes_for_completionhandler_%29.md): Removes the specified types of website data from one or more data records.
- [removeDataOfTypes:modifiedSince:completionHandler:](wkwebsitedatastore/removedata%28oftypes_modifiedsince_completionhandler_%29.md): Removes website data that changed after the specified date.

### Removing a data store

- [removeDataStoreForIdentifier:completionHandler:](wkwebsitedatastore/remove%28foridentifier_completionhandler_%29.md): Removes the data store that matches the identifier you provide.

### Instance Properties

- [proxyConfigurations](wkwebsitedatastore/proxyconfigurations-6g21z.md)

### Instance Methods

- [fetchDataOfTypes:completionHandler:](wkwebsitedatastore/fetchdata%28of_completionhandler_%29.md)
- [restoreData:completionHandler:](wkwebsitedatastore/restoredata%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web data management

- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
