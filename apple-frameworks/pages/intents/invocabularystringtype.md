> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invocabularystringtype](https://developer.apple.com/documentation/intents/invocabularystringtype)

# INVocabularyStringType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Possible usages for a custom vocabulary term.

## Declaration

```swift
enum INVocabularyStringType
```

## Topics

### Constants

- [INVocabularyStringType.contactName](invocabularystringtype/contactname.md): The name of an app-specific contact.
- [INVocabularyStringType.contactGroupName](invocabularystringtype/contactgroupname.md): The name of a group of contacts, as a person would say it.
- [INVocabularyStringType.photoTag](invocabularystringtype/phototag.md): A user-defined keyword associated with an image or images.
- [INVocabularyStringType.photoAlbumName](invocabularystringtype/photoalbumname.md): The user-given name assigned to a collection of photographs.
- [INVocabularyStringType.workoutActivityName](invocabularystringtype/workoutactivityname.md): The user-given name assigned to a workout.
- [INVocabularyStringType.carProfileName](invocabularystringtype/carprofilename.md): The name of a vehicle configuration profile.
- [INVocabularyStringType.carName](invocabularystringtype/carname.md): A name that identifies the user’s car.
- [INVocabularyStringType.paymentsOrganizationName](invocabularystringtype/paymentsorganizationname.md): The name of the bank or company that holds the user’s account.
- [INVocabularyStringType.paymentsAccountNickname](invocabularystringtype/paymentsaccountnickname.md): The user-given nickname for a bank account.
- [INVocabularyStringType.notebookItemTitle](invocabularystringtype/notebookitemtitle.md): The title of a note, task, or task list.
- [INVocabularyStringType.notebookItemGroupName](invocabularystringtype/notebookitemgroupname.md): The title of a group (or folder) containing the user’s notes or task lists.
- [INVocabularyStringType.mediaPlaylistTitle](invocabularystringtype/mediaplaylisttitle.md): The name or title of a playlist.
- [INVocabularyStringType.mediaMusicArtistName](invocabularystringtype/mediamusicartistname.md): The name of a musical artist.
- [INVocabularyStringType.mediaAudiobookTitle](invocabularystringtype/mediaaudiobooktitle.md): The name or title of an audiobook.
- [INVocabularyStringType.mediaAudiobookAuthorName](invocabularystringtype/mediaaudiobookauthorname.md): The name of an audiobook’s author.
- [INVocabularyStringType.mediaShowTitle](invocabularystringtype/mediashowtitle.md): The name or title of a podcast or radio show.

### Initializers

- [init(rawValue:)](invocabularystringtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating the User-Specific Vocabulary

- [setVocabulary(\_:of:)](invocabulary/setvocabulary%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [setVocabularyStrings(\_:of:)](invocabulary/setvocabularystrings%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [removeAllVocabularyStrings()](invocabulary/removeallvocabularystrings%28%29.md): Removes all user-specific vocabulary strings.

# INVocabularyStringType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Possible usages for a custom vocabulary term.

## Declaration

```objectivec
enum INVocabularyStringType : NSInteger;
```

## Topics

### Constants

- [INVocabularyStringTypeContactName](invocabularystringtype/contactname.md): The name of an app-specific contact.
- [INVocabularyStringTypeContactGroupName](invocabularystringtype/contactgroupname.md): The name of a group of contacts, as a person would say it.
- [INVocabularyStringTypePhotoTag](invocabularystringtype/phototag.md): A user-defined keyword associated with an image or images.
- [INVocabularyStringTypePhotoAlbumName](invocabularystringtype/photoalbumname.md): The user-given name assigned to a collection of photographs.
- [INVocabularyStringTypeWorkoutActivityName](invocabularystringtype/workoutactivityname.md): The user-given name assigned to a workout.
- [INVocabularyStringTypeCarProfileName](invocabularystringtype/carprofilename.md): The name of a vehicle configuration profile.
- [INVocabularyStringTypeCarName](invocabularystringtype/carname.md): A name that identifies the user’s car.
- [INVocabularyStringTypePaymentsOrganizationName](invocabularystringtype/paymentsorganizationname.md): The name of the bank or company that holds the user’s account.
- [INVocabularyStringTypePaymentsAccountNickname](invocabularystringtype/paymentsaccountnickname.md): The user-given nickname for a bank account.
- [INVocabularyStringTypeNotebookItemTitle](invocabularystringtype/notebookitemtitle.md): The title of a note, task, or task list.
- [INVocabularyStringTypeNotebookItemGroupName](invocabularystringtype/notebookitemgroupname.md): The title of a group (or folder) containing the user’s notes or task lists.
- [INVocabularyStringTypeMediaPlaylistTitle](invocabularystringtype/mediaplaylisttitle.md): The name or title of a playlist.
- [INVocabularyStringTypeMediaMusicArtistName](invocabularystringtype/mediamusicartistname.md): The name of a musical artist.
- [INVocabularyStringTypeMediaAudiobookTitle](invocabularystringtype/mediaaudiobooktitle.md): The name or title of an audiobook.
- [INVocabularyStringTypeMediaAudiobookAuthorName](invocabularystringtype/mediaaudiobookauthorname.md): The name of an audiobook’s author.
- [INVocabularyStringTypeMediaShowTitle](invocabularystringtype/mediashowtitle.md): The name or title of a podcast or radio show.

## See Also

### Updating the User-Specific Vocabulary

- [setVocabulary:ofType:](invocabulary/setvocabulary%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [setVocabularyStrings:ofType:](invocabulary/setvocabularystrings%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [removeAllVocabularyStrings](invocabulary/removeallvocabularystrings%28%29.md): Removes all user-specific vocabulary strings.
