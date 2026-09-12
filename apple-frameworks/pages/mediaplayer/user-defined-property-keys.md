> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/user-defined-property-keys](https://developer.apple.com/documentation/mediaplayer/user-defined-property-keys)

# User-defined property keys (Swift)

**Framework:** Media Player  
**Kind:** API Collection

Properties for obtaining user-defined metadata for a media item.

<a id="overview"></a>

## Overview

Obtain user-defined metadata for a media item by calling the [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md) method with these property keys. Don’t use user-defined properties to build media property predicates.

## Topics

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyLastPlayedDate](mpmediaitempropertylastplayeddate.md): The most recent calendar date on which the user played the media item.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyBookmarkTime](mpmediaitempropertybookmarktime.md): The user’s place in the media item the most recent time it was played.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.

## See Also

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.

# User-defined property keys (Objective-C)

**Framework:** Media Player  
**Kind:** API Collection

Properties for obtaining user-defined metadata for a media item.

<a id="overview"></a>

## Overview

Obtain user-defined metadata for a media item by calling the [valueForProperty:](mpmediaentity/value%28forproperty_%29.md) method with these property keys. Don’t use user-defined properties to build media property predicates.

## Topics

### User-defined property keys

- [MPMediaItemPropertySkipCount](mpmediaitempropertyskipcount.md): The number of times the user has skipped playing the item.
- [MPMediaItemPropertyRating](mpmediaitempropertyrating.md): The user-specified rating of the object in the range `[0...5]`, where a value of 5 indicates the most favorable rating.
- [MPMediaItemPropertyLastPlayedDate](mpmediaitempropertylastplayeddate.md): The most recent calendar date on which the user played the media item.
- [MPMediaItemPropertyUserGrouping](mpmediaitempropertyusergrouping.md): Corresponds to the “Grouping” field in the Info tab in the Get Info dialog in iTunes.
- [MPMediaItemPropertyBookmarkTime](mpmediaitempropertybookmarktime.md): The user’s place in the media item the most recent time it was played.
- [MPMediaItemPropertyDateAdded](mpmediaitempropertydateadded.md): The date the media item was added to the user’s Media library.

## See Also

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.
