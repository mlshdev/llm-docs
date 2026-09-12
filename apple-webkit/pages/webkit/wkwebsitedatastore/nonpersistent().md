> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/nonpersistent()](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/nonpersistent())

# nonPersistent() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.

## Declaration

```swift
class func nonPersistent() -> WKWebsiteDataStore
```

<a id="return-value"></a>

## Return Value

A new data store object that doesn’t save data to disk.

<a id="Discussion"></a>

## Discussion

Use a nonpersistent data store to implement private browsing in your web view. This method creates a new data store that stores data only in memory, and doesn’t write that data to disk.

## See Also

### Creating a data store object

- [default()](default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [init(forIdentifier:)](init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.

# nonPersistentDataStore (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.

## Declaration

```objectivec
+ (WKWebsiteDataStore *) nonPersistentDataStore;
```

<a id="return-value"></a>

## Return Value

A new data store object that doesn’t save data to disk.

<a id="Discussion"></a>

## Discussion

Use a nonpersistent data store to implement private browsing in your web view. This method creates a new data store that stores data only in memory, and doesn’t write that data to disk.

## See Also

### Creating a data store object

- [defaultDataStore](default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [dataStoreForIdentifier:](init%28foridentifier_%29.md): Returns the persistent data store with the unique identifier you provide.
