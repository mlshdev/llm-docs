> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmevent/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmevent/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the event.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Getting information about the event

- [isSupported(for:)](issupported%28for_%29.md): A Boolean value indicating whether the event can be added to an event trigger on the specified home.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Getting information about the event

- [isSupportedForHome:](issupported%28for_%29.md): A Boolean value indicating whether the event can be added to an event trigger on the specified home.
