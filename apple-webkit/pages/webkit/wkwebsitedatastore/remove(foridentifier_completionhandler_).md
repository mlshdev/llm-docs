> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/remove(foridentifier:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/remove(foridentifier:completionhandler:))

# remove(forIdentifier:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Removes the data store that matches the identifier you provide.

## Declaration

```swift
class func remove(forIdentifier identifier: UUID, completionHandler: @escaping @MainActor @Sendable ((any Error)?) -> Void)
```

```swift
class func remove(forIdentifier identifier: UUID) async throws
```

## Parameters

- `identifier`: An identifier that uniquely identifies a data store.
- `completionHandler`: A block the system invokes after it removes the data store. This block has no return value, and takes the following parameter:

  - **error**: An error, if the system could not remove the data store.

<a id="Discussion"></a>

## Discussion

Call this method to remove the data store for the unique identifier. Release any [WKWebView](../wkwebview.md) instances using the data store before you call this method. If the system cannot complete removal of the data store, this throws an error.

# removeDataStoreForIdentifier:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Removes the data store that matches the identifier you provide.

## Declaration

```objectivec
+ (void) removeDataStoreForIdentifier:(NSUUID *) identifier completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `identifier`: An identifier that uniquely identifies a data store.
- `completionHandler`: A block the system invokes after it removes the data store. This block has no return value, and takes the following parameter:

  - **error**: An error, if the system could not remove the data store.

<a id="Discussion"></a>

## Discussion

Call this method to remove the data store for the unique identifier. Release any [WKWebView](../wkwebview.md) instances using the data store before you call this method. If the system cannot complete removal of the data store, this throws an error.
