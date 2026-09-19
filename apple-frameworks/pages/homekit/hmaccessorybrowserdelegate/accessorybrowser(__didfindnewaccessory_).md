> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessorybrowserdelegate/accessorybrowser(_:didfindnewaccessory:)

# accessoryBrowser(\_:didFindNewAccessory:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Tells the delegate that a new accessory has been discovered.

## Declaration

```swift
optional func accessoryBrowser(_ browser: HMAccessoryBrowser, didFindNewAccessory accessory: HMAccessory)
```

## Parameters

- `browser`: The browser that discovered the new accessory.
- `accessory`: The new accessory.

## See Also

### Tracking new accessories

- [accessoryBrowser(\_:didRemoveNewAccessory:)](accessorybrowser%28__didremovenewaccessory_%29.md): Tells the delegate that a new accessory is no longer available in the browser.

# accessoryBrowser:didFindNewAccessory: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Tells the delegate that a new accessory has been discovered.

## Declaration

```objectivec
- (void) accessoryBrowser:(HMAccessoryBrowser *) browser didFindNewAccessory:(HMAccessory *) accessory;
```

## Parameters

- `browser`: The browser that discovered the new accessory.
- `accessory`: The new accessory.

## See Also

### Tracking new accessories

- [accessoryBrowser:didRemoveNewAccessory:](accessorybrowser%28__didremovenewaccessory_%29.md): Tells the delegate that a new accessory is no longer available in the browser.
