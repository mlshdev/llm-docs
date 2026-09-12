> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/startitemid](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor/startitemid)

# startItemID (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The item identified by the store identifier to play first.

## Declaration

```swift
var startItemID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Store identifier queue descriptor properties

- [storeIDs](storeids.md): An array containing the store identifiers found by the query used to create the queue descriptor.

# startItemID (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The item identified by the store identifier to play first.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * startItemID;
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Store identifier queue descriptor properties

- [storeIDs](storeids.md): An array containing the store identifiers found by the query used to create the queue descriptor.
