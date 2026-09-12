> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/fetchalldatastoreidentifiers(_:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/fetchalldatastoreidentifiers(_:))

# fetchAllDataStoreIdentifiers(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Fetches an array of identifiers from existing data stores that have identifiers.

## Declaration

```swift
class func fetchAllDataStoreIdentifiers(_ completionHandler: @escaping @MainActor @Sendable ([UUID]) -> Void)
```

```swift
class var allDataStoreIdentifiers: [UUID] { get async }
```

## Parameters

- `completionHandler`: A block to invoke with the fetched list of unique identifiers.

# fetchAllDataStoreIdentifiers: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Fetches an array of identifiers from existing data stores that have identifiers.

## Declaration

```objectivec
+ (void) fetchAllDataStoreIdentifiers:(void (^)(NSArray<NSUUID *> *)) completionHandler;
```

## Parameters

- `completionHandler`: A block to invoke with the fetched list of unique identifiers.
