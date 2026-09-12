> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatesearchtype](https://developer.apple.com/documentation/intents/indatesearchtype)

# INDateSearchType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the type of date-based search to perform.

> INDateSearchType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INDateSearchType
```

## Topics

### Constants

- [INDateSearchType.unknown](indatesearchtype/unknown.md): Deprecated. An unknown search type.
- [INDateSearchType.byDueDate](indatesearchtype/byduedate.md): Deprecated. A search type that requires matching the due date of a reminder to the specified value.
- [INDateSearchType.byModifiedDate](indatesearchtype/bymodifieddate.md): Deprecated. A search type that requires matching the modification date of a note.
- [INDateSearchType.byCreatedDate](indatesearchtype/bycreateddate.md): Deprecated. A search type that requires matching the creation date of a note.

### Initializers

- [init(rawValue:)](indatesearchtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching by Date

- [dateTime](insearchfornotebookitemsintent/datetime.md): Deprecated. The value to use when performing date-based searches.
- [dateSearchType](insearchfornotebookitemsintent/datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.

# INDateSearchType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the type of date-based search to perform.

> INDateSearchType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INDateSearchType : NSInteger;
```

## Topics

### Constants

- [INDateSearchTypeUnknown](indatesearchtype/unknown.md): Deprecated. An unknown search type.
- [INDateSearchTypeByDueDate](indatesearchtype/byduedate.md): Deprecated. A search type that requires matching the due date of a reminder to the specified value.
- [INDateSearchTypeByModifiedDate](indatesearchtype/bymodifieddate.md): Deprecated. A search type that requires matching the modification date of a note.
- [INDateSearchTypeByCreatedDate](indatesearchtype/bycreateddate.md): Deprecated. A search type that requires matching the creation date of a note.

## See Also

### Searching by Date

- [dateTime](insearchfornotebookitemsintent/datetime.md): Deprecated. The value to use when performing date-based searches.
- [dateSearchType](insearchfornotebookitemsintent/datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.
