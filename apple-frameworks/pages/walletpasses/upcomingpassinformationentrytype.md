> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/upcomingpassinformationentrytype](https://developer.apple.com/documentation/walletpasses/upcomingpassinformationentrytype)

# UpcomingPassInformationEntryType

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · watchOS 26.0+

An object that represents a upcoming pass information entry for an specific upcoming event.

## Declaration

```
object UpcomingPassInformationEntryType
```

## Properties

- `image` — `UpcomingPassInformationEntryType.Image`: An object that represents the the image shown on the pass.
- `imageURLEntry` — `UpcomingPassInformationEntryType.ImageURLEntry`: An object that represents the image speficiations for the pass.

## Topics

### Adding data for the type of multievent pass entry

- [UpcomingPassInformationEntryType.Image](upcomingpassinformationentrytype/image-data.dictionary.md): An object that represents the image shown within the detail views of upcoming pass information entries.
- [UpcomingPassInformationEntryType.ImageURLEntry](upcomingpassinformationentrytype/imageurlentry-data.dictionary.md): An object that represents the image specifications for the upcoming pass information entry.

## See Also

### Event passes

- [Creating a poster event pass using semantic tags](creating-an-event-pass-using-semantic-tags.md): Use semantic tags to provide up-to-date information for event passes.
- [Pass.EventTicket](pass/eventticket-data.dictionary.md): An object that represents the groups of fields that display the information for an event ticket.
- [SemanticTags](semantictags.md): An object that contains machine-readable metadata the system uses to offer a pass and suggest related actions.
- [SemanticTagType](semantictagtype.md): A compilation of data object types for semantic tags.
- [UpcomingPassInformationEntry](upcomingpassinformationentry.md): An object that represents the ordered list of all upcoming pass information entries.
