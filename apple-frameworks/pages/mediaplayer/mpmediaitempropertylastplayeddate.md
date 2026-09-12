> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertylastplayeddate](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertylastplayeddate)

# MPMediaItemPropertyLastPlayedDate (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The most recent calendar date on which the user played the media item.

## Declaration

```swift
let MPMediaItemPropertyLastPlayedDate: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSDate](../foundation/nsdate.md) object.

## See Also

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyBookmarkTime](mpmediaitempropertybookmarktime.md): The user’s place in the media item the most recent time it was played.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.

# MPMediaItemPropertyLastPlayedDate (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The most recent calendar date on which the user played the media item.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyLastPlayedDate;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSDate](../foundation/nsdate.md) object.

## See Also

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyBookmarkTime](mpmediaitempropertybookmarktime.md): The user’s place in the media item the most recent time it was played.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.
