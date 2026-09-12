> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/data-store-record-types](https://developer.apple.com/documentation/webkit/data-store-record-types)

# Data Store Record Types

**Interface languages:** Swift, Objective-C

**Framework:** WebKit  
**Kind:** API Collection

Explore the constants that identify the types of data that websites store.

<a id="overview"></a>

## Overview

A [WKWebsiteDataRecord](wkwebsitedatarecord.md) object includes these constants in its [dataTypes](wkwebsitedatarecord/datatypes.md) property.

## Topics

### Cookie type

- [WKWebsiteDataTypeCookies](wkwebsitedatatypecookies.md): Cookies.

### Cache types

- [WKWebsiteDataTypeMemoryCache](wkwebsitedatatypememorycache.md): In-memory caches.
- [WKWebsiteDataTypeDiskCache](wkwebsitedatatypediskcache.md): On-disk caches.
- [WKWebsiteDataTypeOfflineWebApplicationCache](wkwebsitedatatypeofflinewebapplicationcache.md): Deprecated. HTML offline web app caches.

### Storage types

- [WKWebsiteDataTypeLocalStorage](wkwebsitedatatypelocalstorage.md): HTML local storage.
- [WKWebsiteDataTypeSessionStorage](wkwebsitedatatypesessionstorage.md): HTML session storage.

### Database types

- [WKWebsiteDataTypeWebSQLDatabases](wkwebsitedatatypewebsqldatabases.md): WebSQL databases.
- [WKWebsiteDataTypeIndexedDBDatabases](wkwebsitedatatypeindexeddbdatabases.md): IndexedDB databases.

### Screen time type

- [WKWebsiteDataTypeScreenTime](wkwebsitedatatypescreentime.md)

## See Also

### Getting the Data Type

- [dataTypes](wkwebsitedatarecord/datatypes.md): The types of data associated with the record.
