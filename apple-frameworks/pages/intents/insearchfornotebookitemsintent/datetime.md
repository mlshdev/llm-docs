> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/datetime](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/datetime)

# dateTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The value to use when performing date-based searches.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var dateTime: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use the value in the [dateSearchType](datesearchtype.md) property to determine how to apply the specified date to your search criteria.

## See Also

### Searching by Date

- [dateSearchType](datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.
- [INDateSearchType](../indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.

# dateTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The value to use when performing date-based searches.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * dateTime;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * dateTime;
```

<a id="Discussion"></a>

## Discussion

Use the value in the [dateSearchType](datesearchtype.md) property to determine how to apply the specified date to your search criteria.

## See Also

### Searching by Date

- [dateSearchType](datesearchtype.md): Deprecated. An indicator of how to apply date values to your search.
- [INDateSearchType](../indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.
