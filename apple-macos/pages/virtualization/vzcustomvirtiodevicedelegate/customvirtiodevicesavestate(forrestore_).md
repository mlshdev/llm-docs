> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicesavestate(forrestore:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodevicesavestate(forrestore:))

# customVirtioDeviceSaveState(forRestore:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device needs to save its state.

## Declaration

```swift
optional func customVirtioDeviceSaveState(forRestore device: VZCustomVirtioDevice) -> Data?
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

Return the state data to save in an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object. If there is no state to save, return an empty NSData object (\[NSData data\]).

If you return `nil` from this method, the save operation fails.

# customVirtioDeviceSaveStateForRestore: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device needs to save its state.

## Declaration

```objectivec
- (NSData *) customVirtioDeviceSaveStateForRestore:(VZCustomVirtioDevice *) device;
```

## Parameters

- `device`: The device invoking the delegate method.

<a id="discussion"></a>

## Discussion

Return the state data to save in an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object. If there is no state to save, return an empty NSData object (\[NSData data\]).

If you return `nil` from this method, the save operation fails.
