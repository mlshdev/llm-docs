> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitem/titleproperty(forgroupingtype:)](https://developer.apple.com/documentation/mediaplayer/mpmediaitem/titleproperty(forgroupingtype:))

# titleProperty(forGroupingType:) (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Obtains the title key for a specified grouping type.

## Declaration

```swift
class func titleProperty(forGroupingType groupingType: MPMediaGrouping) -> String
```

## Parameters

- `groupingType`: The grouping type that you want the title key for.

<a id="return-value"></a>

## Return Value

The title key for the group type.

<a id="Discussion"></a>

## Discussion

Use this convenience method to obtain the key for the title that corresponds to a specified grouping type. For example, the following statement obtains the title key for the album grouping type:

**Swift**

```swift
let titleIDKey = [MPMediaItem.persistentIDProperty(forGroupingType: MPMediaGrouping.album)]
```

**Objective-C**

```objc
NSString *titleIDKey = [MPMediaItem titlePropertyForGroupingType: MPMediaGroupingAlbum];
```

You could then obtain the specific title that you want by using the [value(forProperty:)](../mpmediaentity/value%28forproperty_%29.md) method. [MPMediaGrouping](../mpmediagrouping.md) describes grouping keys.

## See Also

### Obtaining group properties

- [persistentIDProperty(forGroupingType:)](persistentidproperty%28forgroupingtype_%29.md): Obtains the persistent identifier key for a specified grouping type.

# titlePropertyForGroupingType: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Obtains the title key for a specified grouping type.

## Declaration

```objectivec
+ (NSString *) titlePropertyForGroupingType:(MPMediaGrouping) groupingType;
```

## Parameters

- `groupingType`: The grouping type that you want the title key for.

<a id="return-value"></a>

## Return Value

The title key for the group type.

<a id="Discussion"></a>

## Discussion

Use this convenience method to obtain the key for the title that corresponds to a specified grouping type. For example, the following statement obtains the title key for the album grouping type:

**Swift**

```swift
let titleIDKey = [MPMediaItem.persistentIDProperty(forGroupingType: MPMediaGrouping.album)]
```

**Objective-C**

```objc
NSString *titleIDKey = [MPMediaItem titlePropertyForGroupingType: MPMediaGroupingAlbum];
```

You could then obtain the specific title that you want by using the [valueForProperty:](../mpmediaentity/value%28forproperty_%29.md) method. [MPMediaGrouping](../mpmediagrouping.md) describes grouping keys.

## See Also

### Obtaining group properties

- [persistentIDPropertyForGroupingType:](persistentidproperty%28forgroupingtype_%29.md): Obtains the persistent identifier key for a specified grouping type.
