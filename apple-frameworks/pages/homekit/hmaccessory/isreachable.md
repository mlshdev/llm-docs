> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/isreachable](https://developer.apple.com/documentation/homekit/hmaccessory/isreachable)

# isReachable (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the accessory can be communicated with in the current network environment.

## Declaration

```swift
var isReachable: Bool { get }
```

## See Also

### Getting accessory state

- [isBlocked](isblocked.md): A Boolean value indicating whether the accessory is blocked.

# reachable (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the accessory can be communicated with in the current network environment.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReachable) BOOL reachable;
```

## See Also

### Getting accessory state

- [blocked](isblocked.md): A Boolean value indicating whether the accessory is blocked.
