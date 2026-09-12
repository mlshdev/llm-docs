> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/init(foridentifier:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/init(foridentifier:))

# init(forIdentifier:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Returns the persistent data store with the unique identifier you provide.

## Declaration

```swift
init(forIdentifier identifier: UUID)
```

## Parameters

- `identifier`: An identifier that uniquely identifies a data store.

<a id="Discussion"></a>

## Discussion

If the data store for the unique identifier you provide does not exist, the system creates and returns it. Use this method to get a data store for a profile.

This method throws an exception if the identifier is not valid.

## See Also

### Creating a data store object

- [default()](default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [nonPersistent()](nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.

# dataStoreForIdentifier: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Returns the persistent data store with the unique identifier you provide.

## Declaration

```objectivec
+ (WKWebsiteDataStore *) dataStoreForIdentifier:(NSUUID *) identifier;
```

## Parameters

- `identifier`: An identifier that uniquely identifies a data store.

<a id="Discussion"></a>

## Discussion

If the data store for the unique identifier you provide does not exist, the system creates and returns it. Use this method to get a data store for a profile.

This method throws an exception if the identifier is not valid.

## See Also

### Creating a data store object

- [defaultDataStore](default%28%29.md): Returns the default data store, which stores data persistently to disk.
- [nonPersistentDataStore](nonpersistent%28%29.md): Creates a new data store object that stores website data in memory, and doesn’t write that data to disk.
