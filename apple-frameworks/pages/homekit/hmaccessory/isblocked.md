> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/isblocked](https://developer.apple.com/documentation/homekit/hmaccessory/isblocked)

# isBlocked (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the accessory is blocked.

## Declaration

```swift
var isBlocked: Bool { get }
```

## See Also

### Getting accessory state

- [isReachable](isreachable.md): A Boolean value indicating whether the accessory can be communicated with in the current network environment.

# blocked (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the accessory is blocked.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBlocked) BOOL blocked;
```

## See Also

### Getting accessory state

- [reachable](isreachable.md): A Boolean value indicating whether the accessory can be communicated with in the current network environment.
