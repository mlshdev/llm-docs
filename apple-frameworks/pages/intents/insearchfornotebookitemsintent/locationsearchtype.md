> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/locationsearchtype](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/locationsearchtype)

# locationSearchType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how to apply location values to your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var locationSearchType: INLocationSearchType { get }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine how to apply the value in the [location](location.md) property to your search results. When the value of this property is [INLocationSearchType.unknown](../inlocationsearchtype/unknown.md), do not consider location as part of your search criteria.

## See Also

### Searching for Tasks by Location

- [location](location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [INLocationSearchType](../inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.

# locationSearchType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how to apply location values to your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INLocationSearchType locationSearchType;
```

```objectivec
@property (atomic, assign, readonly) INLocationSearchType locationSearchType;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine how to apply the value in the [location](location.md) property to your search results. When the value of this property is [INLocationSearchTypeUnknown](../inlocationsearchtype/unknown.md), do not consider location as part of your search criteria.

## See Also

### Searching for Tasks by Location

- [location](location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [INLocationSearchType](../inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.
