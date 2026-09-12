> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/location](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/location)

# location (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The value to use when searching for location-triggered reminders.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var location: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

When the [locationSearchType](locationsearchtype.md) property is [INLocationSearchType.byLocationTrigger](../inlocationsearchtype/bylocationtrigger.md), search for reminders delivered when the user is near the location specified by this property.

## See Also

### Searching for Tasks by Location

- [locationSearchType](locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.
- [INLocationSearchType](../inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.

# location (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The value to use when searching for location-triggered reminders.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * location;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * location;
```

<a id="Discussion"></a>

## Discussion

When the [locationSearchType](locationsearchtype.md) property is [INLocationSearchTypeByLocationTrigger](../inlocationsearchtype/bylocationtrigger.md), search for reminders delivered when the user is near the location specified by this property.

## See Also

### Searching for Tasks by Location

- [locationSearchType](locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.
- [INLocationSearchType](../inlocationsearchtype.md): Deprecated. Constants indicating the type of location-based search to perform.
