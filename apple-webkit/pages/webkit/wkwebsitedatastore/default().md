> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/default()](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/default())

# default() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the default data store, which stores data persistently to disk.

## Declaration

```swift
class func `default`() -> WKWebsiteDataStore
```

<a id="return-value"></a>

## Return Value

The default data store for websites.

<a id="Discussion"></a>

## Discussion

A web view configured with the default data store saves website data persistenly to disk. Use this data store to retain the state of web content between browsing sessions.

## See Also

### Creating a data store object

- [nonPersistent()](nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.
- [init(forIdentifier:)](init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.

# defaultDataStore (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the default data store, which stores data persistently to disk.

## Declaration

```objectivec
+ (WKWebsiteDataStore *) defaultDataStore;
```

<a id="return-value"></a>

## Return Value

The default data store for websites.

<a id="Discussion"></a>

## Discussion

A web view configured with the default data store saves website data persistenly to disk. Use this data store to retain the state of web content between browsing sessions.

## See Also

### Creating a data store object

- [nonPersistentDataStore](nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.
- [dataStoreForIdentifier:](init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.
