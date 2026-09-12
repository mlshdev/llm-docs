> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate/home(_:didencountererror:for:)](https://developer.apple.com/documentation/homekit/hmhomedelegate/home(_:didencountererror:for:))

# home(\_:didEncounterError:for:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a configured accessory encountered an error.

## Declaration

```swift
optional func home(_ home: HMHome, didEncounterError error: any Error, for accessory: HMAccessory)
```

## Parameters

- `home`: The home.
- `error`: The error encountered by the accessory.
- `accessory`: The accessory that encountered the error.

<a id="Discussion"></a>

## Discussion

The delegate should check whether the accessory is blocked.

## See Also

### Observing Accessories

- [home(\_:didUnblockAccessory:)](home%28__didunblockaccessory_%29.md): Tells the delegate that an accessory has been unblocked.

# home:didEncounterError:forAccessory: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a configured accessory encountered an error.

## Declaration

```objectivec
- (void) home:(HMHome *) home didEncounterError:(NSError *) error forAccessory:(HMAccessory *) accessory;
```

## Parameters

- `home`: The home.
- `error`: The error encountered by the accessory.
- `accessory`: The accessory that encountered the error.

<a id="Discussion"></a>

## Discussion

The delegate should check whether the accessory is blocked.

## See Also

### Observing Accessories

- [home:didUnblockAccessory:](home%28__didunblockaccessory_%29.md): Tells the delegate that an accessory has been unblocked.
