> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/storeids](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/storeids)

# storeIDs (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An array containing the store identifiers found by the query used to create the queue descriptor.

## Declaration

```swift
var storeIDs: [String]? { get set }
```

## See Also

### Store identifier queue descriptor properties

- [startItemID](startitemid.md): The item identified by the store identifier to play first.

# storeIDs (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An array containing the store identifiers found by the query used to create the queue descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * storeIDs;
```

## See Also

### Store identifier queue descriptor properties

- [startItemID](startitemid.md): The item identified by the store identifier to play first.
