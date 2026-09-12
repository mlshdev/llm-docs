> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/isuserinteractive](https://developer.apple.com/documentation/homekit/hmservice/isuserinteractive)

# isUserInteractive (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether this service supports user interaction.

## Declaration

```swift
var isUserInteractive: Bool { get }
```

## See Also

### Reading service properties

- [isPrimaryService](isprimaryservice.md): A Boolean value that indicates whether this service is the primary service on the accessory.

# userInteractive (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether this service supports user interaction.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUserInteractive) BOOL userInteractive;
```

## See Also

### Reading service properties

- [primaryService](isprimaryservice.md): A Boolean value that indicates whether this service is the primary service on the accessory.
