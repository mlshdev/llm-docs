> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentry/storecategory-swift.enum/longterm7](https://developer.apple.com/documentation/oslog/oslogentry/storecategory-swift.enum/longterm7)

# OSLogEntry.StoreCategory.longTerm7 (Swift)

**Framework:** OSLog  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entry was tagged with a hint indicating the system should try to preserve it for approximately 7 days.

## Declaration

```swift
case longTerm7
```

<a id="Discussion"></a>

## Discussion

It was persisted in the filesystem-backed date store, and rotation of these entries was based on both time and space considerations.

## See Also

### Constants

- [OSLogEntry.StoreCategory.undefined](undefined.md): This entry’s purpose is unknown.
- [OSLogEntry.StoreCategory.metadata](metadata.md): This entry was generated as information about the other entries or about the sequence of entries as a whole.
- [OSLogEntry.StoreCategory.shortTerm](shortterm.md): This entry was not intended to be long-lived, and was captured in the ring buffer.
- [OSLogEntry.StoreCategory.longTermAuto](longtermauto.md): The entry was tagged with a hint indicating the system should try to preserve it based on the amount of space available.
- [OSLogEntry.StoreCategory.longTerm1](longterm1.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 1 day.
- [OSLogEntry.StoreCategory.longTerm3](longterm3.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 3 days.
- [OSLogEntry.StoreCategory.longTerm14](longterm14.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 14 days.
- [OSLogEntry.StoreCategory.longTerm30](longterm30.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 30 days.

# OSLogEntryStoreCategoryLongTerm7 (Objective-C)

**Framework:** OSLog  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entry was tagged with a hint indicating the system should try to preserve it for approximately 7 days.

## Declaration

```objectivec
OSLogEntryStoreCategoryLongTerm7
```

<a id="Discussion"></a>

## Discussion

It was persisted in the filesystem-backed date store, and rotation of these entries was based on both time and space considerations.

## See Also

### Constants

- [OSLogEntryStoreCategoryUndefined](undefined.md): This entry’s purpose is unknown.
- [OSLogEntryStoreCategoryMetadata](metadata.md): This entry was generated as information about the other entries or about the sequence of entries as a whole.
- [OSLogEntryStoreCategoryShortTerm](shortterm.md): This entry was not intended to be long-lived, and was captured in the ring buffer.
- [OSLogEntryStoreCategoryLongTermAuto](longtermauto.md): The entry was tagged with a hint indicating the system should try to preserve it based on the amount of space available.
- [OSLogEntryStoreCategoryLongTerm1](longterm1.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 1 day.
- [OSLogEntryStoreCategoryLongTerm3](longterm3.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 3 days.
- [OSLogEntryStoreCategoryLongTerm14](longterm14.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 14 days.
- [OSLogEntryStoreCategoryLongTerm30](longterm30.md): The entry was tagged with a hint indicating the system should try to preserve it for approximately 30 days.
