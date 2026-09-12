> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invocabularystringtype/carname](https://developer.apple.com/documentation/intents/invocabularystringtype/carname)

# INVocabularyStringType.carName (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 6.0+

A name that identifies the user’s car.

## Declaration

```swift
case carName
```

<a id="Discussion"></a>

## Discussion

Siri puts the car name in the `carName` property of the [INActivateCarSignalIntent](../inactivatecarsignalintent.md), [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md), [INGetCarLockStatusIntent](../ingetcarlockstatusintent.md), and [INSetCarLockStatusIntent](../insetcarlockstatusintent.md) classes. If Siri can’t identify a car name in the request, it uses the string `myCar`.

## See Also

### Constants

- [INVocabularyStringType.contactName](contactname.md): The name of an app-specific contact.
- [INVocabularyStringType.contactGroupName](contactgroupname.md): The name of a group of contacts, as a person would say it.
- [INVocabularyStringType.photoTag](phototag.md): A user-defined keyword associated with an image or images.
- [INVocabularyStringType.photoAlbumName](photoalbumname.md): The user-given name assigned to a collection of photographs.
- [INVocabularyStringType.workoutActivityName](workoutactivityname.md): The user-given name assigned to a workout.
- [INVocabularyStringType.carProfileName](carprofilename.md): The name of a vehicle configuration profile.
- [INVocabularyStringType.paymentsOrganizationName](paymentsorganizationname.md): The name of the bank or company that holds the user’s account.
- [INVocabularyStringType.paymentsAccountNickname](paymentsaccountnickname.md): The user-given nickname for a bank account.
- [INVocabularyStringType.notebookItemTitle](notebookitemtitle.md): The title of a note, task, or task list.
- [INVocabularyStringType.notebookItemGroupName](notebookitemgroupname.md): The title of a group (or folder) containing the user’s notes or task lists.
- [INVocabularyStringType.mediaPlaylistTitle](mediaplaylisttitle.md): The name or title of a playlist.
- [INVocabularyStringType.mediaMusicArtistName](mediamusicartistname.md): The name of a musical artist.
- [INVocabularyStringType.mediaAudiobookTitle](mediaaudiobooktitle.md): The name or title of an audiobook.
- [INVocabularyStringType.mediaAudiobookAuthorName](mediaaudiobookauthorname.md): The name of an audiobook’s author.
- [INVocabularyStringType.mediaShowTitle](mediashowtitle.md): The name or title of a podcast or radio show.

# INVocabularyStringTypeCarName (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A name that identifies the user’s car.

## Declaration

```objectivec
INVocabularyStringTypeCarName
```

<a id="Discussion"></a>

## Discussion

Siri puts the car name in the `carName` property of the [INActivateCarSignalIntent](../inactivatecarsignalintent.md), [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md), [INGetCarLockStatusIntent](../ingetcarlockstatusintent.md), and [INSetCarLockStatusIntent](../insetcarlockstatusintent.md) classes. If Siri can’t identify a car name in the request, it uses the string `myCar`.

## See Also

### Constants

- [INVocabularyStringTypeContactName](contactname.md): The name of an app-specific contact.
- [INVocabularyStringTypeContactGroupName](contactgroupname.md): The name of a group of contacts, as a person would say it.
- [INVocabularyStringTypePhotoTag](phototag.md): A user-defined keyword associated with an image or images.
- [INVocabularyStringTypePhotoAlbumName](photoalbumname.md): The user-given name assigned to a collection of photographs.
- [INVocabularyStringTypeWorkoutActivityName](workoutactivityname.md): The user-given name assigned to a workout.
- [INVocabularyStringTypeCarProfileName](carprofilename.md): The name of a vehicle configuration profile.
- [INVocabularyStringTypePaymentsOrganizationName](paymentsorganizationname.md): The name of the bank or company that holds the user’s account.
- [INVocabularyStringTypePaymentsAccountNickname](paymentsaccountnickname.md): The user-given nickname for a bank account.
- [INVocabularyStringTypeNotebookItemTitle](notebookitemtitle.md): The title of a note, task, or task list.
- [INVocabularyStringTypeNotebookItemGroupName](notebookitemgroupname.md): The title of a group (or folder) containing the user’s notes or task lists.
- [INVocabularyStringTypeMediaPlaylistTitle](mediaplaylisttitle.md): The name or title of a playlist.
- [INVocabularyStringTypeMediaMusicArtistName](mediamusicartistname.md): The name of a musical artist.
- [INVocabularyStringTypeMediaAudiobookTitle](mediaaudiobooktitle.md): The name or title of an audiobook.
- [INVocabularyStringTypeMediaAudiobookAuthorName](mediaaudiobookauthorname.md): The name of an audiobook’s author.
- [INVocabularyStringTypeMediaShowTitle](mediashowtitle.md): The name or title of a podcast or radio show.
