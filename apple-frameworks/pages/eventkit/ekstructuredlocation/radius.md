> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekstructuredlocation/radius](https://developer.apple.com/documentation/eventkit/ekstructuredlocation/radius)

# radius (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A minimum distance from the core location that would trigger the alarm or reminder.

## Declaration

```swift
var radius: Double { get set }
```

<a id="Discussion"></a>

## Discussion

To use the default radius, set this property to `0`.

## See Also

### Accessing Structured Location Properties

- [title](title.md): The title of the location.
- [geoLocation](geolocation.md): The core location.

# radius (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A minimum distance from the core location that would trigger the alarm or reminder.

## Declaration

```objectivec
@property (nonatomic) double radius;
```

<a id="Discussion"></a>

## Discussion

To use the default radius, set this property to `0`.

## See Also

### Accessing Structured Location Properties

- [title](title.md): The title of the location.
- [geoLocation](geolocation.md): The core location.
