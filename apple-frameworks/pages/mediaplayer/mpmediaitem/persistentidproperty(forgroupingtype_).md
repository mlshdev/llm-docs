> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitem/persistentidproperty(forgroupingtype:)](https://developer.apple.com/documentation/mediaplayer/mpmediaitem/persistentidproperty(forgroupingtype:))

# persistentIDProperty(forGroupingType:) (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Obtains the persistent identifier key for a specified grouping type.

## Declaration

```swift
class func persistentIDProperty(forGroupingType groupingType: MPMediaGrouping) -> String
```

## Parameters

- `groupingType`: The grouping type that you want the persistent identifier key for.

<a id="return-value"></a>

## Return Value

The identifier for the group type.

<a id="Discussion"></a>

## Discussion

Use this convenience method to obtain the key for a specific persistent identifier based on a grouping type. You can use that key, in turn, to obtain the value of a specific persistent ID of a media item, such as album title or artist name. Using this method simplifies such tasks as drilling down from an artist, to albums by that artist, to a specific album.

For example, the following statement returns the persistent identifier key for the album grouping type:

**Swift**

```swift
let albumIDKey = [MPMediaItem.persistentIDProperty(forGroupingType: MPMediaGrouping.album)]
```

**Objective-C**

```objc
NSString *albumIDKey = [MPMediaItem persistentIDPropertyForGroupingType: MPMediaGroupingAlbum];
```

You could then obtain the specific persistent ID that you want by using the [value(forProperty:)](../mpmediaentity/value%28forproperty_%29.md) method. [MPMediaGrouping](../mpmediagrouping.md) describes grouping keys.

## See Also

### Obtaining group properties

- [titleProperty(forGroupingType:)](titleproperty%28forgroupingtype_%29.md): Obtains the title key for a specified grouping type.

# persistentIDPropertyForGroupingType: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Obtains the persistent identifier key for a specified grouping type.

## Declaration

```objectivec
+ (NSString *) persistentIDPropertyForGroupingType:(MPMediaGrouping) groupingType;
```

## Parameters

- `groupingType`: The grouping type that you want the persistent identifier key for.

<a id="return-value"></a>

## Return Value

The identifier for the group type.

<a id="Discussion"></a>

## Discussion

Use this convenience method to obtain the key for a specific persistent identifier based on a grouping type. You can use that key, in turn, to obtain the value of a specific persistent ID of a media item, such as album title or artist name. Using this method simplifies such tasks as drilling down from an artist, to albums by that artist, to a specific album.

For example, the following statement returns the persistent identifier key for the album grouping type:

**Swift**

```swift
let albumIDKey = [MPMediaItem.persistentIDProperty(forGroupingType: MPMediaGrouping.album)]
```

**Objective-C**

```objc
NSString *albumIDKey = [MPMediaItem persistentIDPropertyForGroupingType: MPMediaGroupingAlbum];
```

You could then obtain the specific persistent ID that you want by using the [valueForProperty:](../mpmediaentity/value%28forproperty_%29.md) method. [MPMediaGrouping](../mpmediagrouping.md) describes grouping keys.

## See Also

### Obtaining group properties

- [titlePropertyForGroupingType:](titleproperty%28forgroupingtype_%29.md): Obtains the title key for a specified grouping type.
