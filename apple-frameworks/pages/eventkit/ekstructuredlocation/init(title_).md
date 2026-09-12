> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekstructuredlocation/init(title:)](https://developer.apple.com/documentation/eventkit/ekstructuredlocation/init(title:))

# init(title:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a new structured location with the specified title.

## Declaration

```swift
convenience init(title: String)
```

## Parameters

- `title`: The title of the location.

<a id="return-value"></a>

## Return Value

The structured location object.

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating Structured Locations

- [init(mapItem:)](init%28mapitem_%29.md): Creates a new structured location with the specified map item.

# locationWithTitle: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates a new structured location with the specified title.

## Declaration

```objectivec
+ (instancetype) locationWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title of the location.

<a id="return-value"></a>

## Return Value

The structured location object.

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating Structured Locations

- [locationWithMapItem:](init%28mapitem_%29.md): Creates a new structured location with the specified map item.
