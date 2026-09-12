> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/init(storeids:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/init(storeids:))

# init(storeIDs:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates a new queue descriptor using the designated store identifiers.

## Declaration

```swift
init(storeIDs: [String])
```

## Parameters

- `storeIDs`: An array of store identifiers used to populate the queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the media items identified by the designated store identifiers.

# initWithStoreIDs: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates a new queue descriptor using the designated store identifiers.

## Declaration

```objectivec
- (instancetype) initWithStoreIDs:(NSArray<NSString *> *) storeIDs;
```

## Parameters

- `storeIDs`: An array of store identifiers used to populate the queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the media items identified by the designated store identifiers.
