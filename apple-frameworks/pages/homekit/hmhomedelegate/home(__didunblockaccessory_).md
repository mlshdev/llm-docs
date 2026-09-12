> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate/home(_:didunblockaccessory:)](https://developer.apple.com/documentation/homekit/hmhomedelegate/home(_:didunblockaccessory:))

# home(\_:didUnblockAccessory:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an accessory has been unblocked.

## Declaration

```swift
optional func home(_ home: HMHome, didUnblockAccessory accessory: HMAccessory)
```

## Parameters

- `home`: The home.
- `accessory`: The accessory that was unblocked.

## See Also

### Observing Accessories

- [home(\_:didEncounterError:for:)](home%28__didencountererror_for_%29.md): Tells the delegate that a configured accessory encountered an error.

# home:didUnblockAccessory: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an accessory has been unblocked.

## Declaration

```objectivec
- (void) home:(HMHome *) home didUnblockAccessory:(HMAccessory *) accessory;
```

## Parameters

- `home`: The home.
- `accessory`: The accessory that was unblocked.

## See Also

### Observing Accessories

- [home:didEncounterError:forAccessory:](home%28__didencountererror_for_%29.md): Tells the delegate that a configured accessory encountered an error.
