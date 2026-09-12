> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlocationsearchtype](https://developer.apple.com/documentation/intents/inlocationsearchtype)

# INLocationSearchType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the type of location-based search to perform.

> INLocationSearchType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INLocationSearchType
```

## Topics

### Constants

- [INLocationSearchType.unknown](inlocationsearchtype/unknown.md): Deprecated. An unknown search type.
- [INLocationSearchType.byLocationTrigger](inlocationsearchtype/bylocationtrigger.md): Deprecated. A search type that requires matching the trigger location of a reminder to the specified location.

### Initializers

- [init(rawValue:)](inlocationsearchtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching for Tasks by Location

- [location](insearchfornotebookitemsintent/location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [locationSearchType](insearchfornotebookitemsintent/locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.

# INLocationSearchType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the type of location-based search to perform.

> INLocationSearchType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INLocationSearchType : NSInteger;
```

## Topics

### Constants

- [INLocationSearchTypeUnknown](inlocationsearchtype/unknown.md): Deprecated. An unknown search type.
- [INLocationSearchTypeByLocationTrigger](inlocationsearchtype/bylocationtrigger.md): Deprecated. A search type that requires matching the trigger location of a reminder to the specified location.

## See Also

### Searching for Tasks by Location

- [location](insearchfornotebookitemsintent/location.md): Deprecated. The value to use when searching for location-triggered reminders.
- [locationSearchType](insearchfornotebookitemsintent/locationsearchtype.md): Deprecated. An indicator of how to apply location values to your search.
