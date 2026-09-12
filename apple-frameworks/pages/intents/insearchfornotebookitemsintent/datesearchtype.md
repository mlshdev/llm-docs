> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/datesearchtype](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/datesearchtype)

# dateSearchType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how to apply date values to your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var dateSearchType: INDateSearchType { get }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine how to apply the value in the [dateTime](datetime.md) property to your search results. When the value of this property is [INDateSearchType.unknown](../indatesearchtype/unknown.md), do not consider location as part of your search criteria.

## See Also

### Searching by Date

- [dateTime](datetime.md): Deprecated. The value to use when performing date-based searches.
- [INDateSearchType](../indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.

# dateSearchType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how to apply date values to your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INDateSearchType dateSearchType;
```

```objectivec
@property (atomic, assign, readonly) INDateSearchType dateSearchType;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine how to apply the value in the [dateTime](datetime.md) property to your search results. When the value of this property is [INDateSearchTypeUnknown](../indatesearchtype/unknown.md), do not consider location as part of your search criteria.

## See Also

### Searching by Date

- [dateTime](datetime.md): Deprecated. The value to use when performing date-based searches.
- [INDateSearchType](../indatesearchtype.md): Deprecated. Constants indicating the type of date-based search to perform.
