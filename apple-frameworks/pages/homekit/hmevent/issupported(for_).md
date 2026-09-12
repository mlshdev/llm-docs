> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmevent/issupported(for:)](https://developer.apple.com/documentation/homekit/hmevent/issupported(for:))

# isSupported(for:) (Swift)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether the event can be added to an event trigger on the specified home.

## Declaration

```swift
class func isSupported(for home: HMHome) -> Bool
```

## See Also

### Getting information about the event

- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the event.

# isSupportedForHome: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether the event can be added to an event trigger on the specified home.

## Declaration

```objectivec
+ (BOOL) isSupportedForHome:(HMHome *) home;
```

## See Also

### Getting information about the event

- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the event.
