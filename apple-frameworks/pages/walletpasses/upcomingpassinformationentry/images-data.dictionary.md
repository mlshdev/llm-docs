> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/upcomingpassinformationentry/images-data.dictionary](https://developer.apple.com/documentation/walletpasses/upcomingpassinformationentry/images-data.dictionary)

# UpcomingPassInformationEntry.Images

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · watchOS 26.0+

A collection of image names used to populate images in the details view.

## Declaration

```
object UpcomingPassInformationEntry.Images
```

## Properties

- `headerImage` — `UpcomingPassInformationEntryType.Image`: The name of the image file used for the header image on the details screen. This can be a remote asset.
- `venueMap` — `UpcomingPassInformationEntryType.Image`: The name of the image file used for the venue map in the event guide for each upcoming pass information entry. This can be a remote asset and is available for event entries.

## See Also

### Adding information to multievent passes

- [UpcomingPassInformationEntry.AdditionalInfoFields](additionalinfofields-data.dictionary.md): The fields of information that display in the Additional Info section below a pass.
- [UpcomingPassInformationEntry.BackFields](backfields-data.dictionary.md): The fields of information displayed in the details view of the upcoming pass information entry.
- [UpcomingPassInformationEntry.DateInformation](dateinformation-data.dictionary.md): Information about the start and end time of the upcoming pass information entry.
- [UpcomingPassInformationEntry.URLs](urls-data.dictionary.md): An object with links to information about the upcoming pass information entry.
