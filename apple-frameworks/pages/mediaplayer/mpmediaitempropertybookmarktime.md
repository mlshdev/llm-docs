> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertybookmarktime](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertybookmarktime)

# MPMediaItemPropertyBookmarkTime (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The user’s place in the media item the most recent time it was played.

## Declaration

```swift
let MPMediaItemPropertyBookmarkTime: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object representing a duration in seconds as an [TimeInterval](../foundation/timeinterval.md).

## See Also

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyLastPlayedDate](mpmediaitempropertylastplayeddate.md): The most recent calendar date on which the user played the media item.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.

# MPMediaItemPropertyBookmarkTime (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The user’s place in the media item the most recent time it was played.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyBookmarkTime;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object representing a duration in seconds as an [NSTimeInterval](../foundation/timeinterval.md).

## See Also

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyLastPlayedDate](mpmediaitempropertylastplayeddate.md): The most recent calendar date on which the user played the media item.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.
