> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmservice/isprimaryservice

# isPrimaryService (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether this service is the primary service on the accessory.

## Declaration

```swift
var isPrimaryService: Bool { get }
```

## See Also

### Reading service properties

- [isUserInteractive](isuserinteractive.md): A Boolean value that indicates whether this service supports user interaction.

# primaryService (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether this service is the primary service on the accessory.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPrimaryService) BOOL primaryService;
```

## See Also

### Reading service properties

- [userInteractive](isuserinteractive.md): A Boolean value that indicates whether this service supports user interaction.
