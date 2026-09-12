> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorybrowserdelegate/accessorybrowser(_:didremovenewaccessory:)](https://developer.apple.com/documentation/homekit/hmaccessorybrowserdelegate/accessorybrowser(_:didremovenewaccessory:))

# accessoryBrowser(\_:didRemoveNewAccessory:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Tells the delegate that a new accessory is no longer available in the browser.

## Declaration

```swift
optional func accessoryBrowser(_ browser: HMAccessoryBrowser, didRemoveNewAccessory accessory: HMAccessory)
```

## Parameters

- `browser`: The browser.
- `accessory`: The accessory that is no longer available.

<a id="Discussion"></a>

## Discussion

A common reason for an accessory to no longer be available is because it was added to a home, and is thus no longer a new accessory.

## See Also

### Tracking new accessories

- [accessoryBrowser(\_:didFindNewAccessory:)](accessorybrowser%28__didfindnewaccessory_%29.md): Tells the delegate that a new accessory has been discovered.

# accessoryBrowser:didRemoveNewAccessory: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Tells the delegate that a new accessory is no longer available in the browser.

## Declaration

```objectivec
- (void) accessoryBrowser:(HMAccessoryBrowser *) browser didRemoveNewAccessory:(HMAccessory *) accessory;
```

## Parameters

- `browser`: The browser.
- `accessory`: The accessory that is no longer available.

<a id="Discussion"></a>

## Discussion

A common reason for an accessory to no longer be available is because it was added to a home, and is thus no longer a new accessory.

## See Also

### Tracking new accessories

- [accessoryBrowser:didFindNewAccessory:](accessorybrowser%28__didfindnewaccessory_%29.md): Tells the delegate that a new accessory has been discovered.
