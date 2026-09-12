> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodeviceshouldrestore(_:savestate:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegate/customvirtiodeviceshouldrestore(_:savestate:))

# customVirtioDeviceShouldRestore(\_:saveState:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device restores its state.

## Declaration

```swift
optional func customVirtioDeviceShouldRestore(_ device: VZCustomVirtioDevice, saveState: Data) -> Bool
```

## Parameters

- `device`: The device invoking the delegate method.
- `saveState`: The data that the delegate returned from [customVirtioDeviceSaveState(forRestore:)](customvirtiodevicesavestate%28forrestore_%29.md).

<a id="discussion"></a>

## Discussion

This method should return `NO` if restore operation failed.

# customVirtioDeviceShouldRestore:saveState: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

The method the framework calls when a device restores its state.

## Declaration

```objectivec
- (BOOL) customVirtioDeviceShouldRestore:(VZCustomVirtioDevice *) device saveState:(NSData *) saveState;
```

## Parameters

- `device`: The device invoking the delegate method.
- `saveState`: The data that the delegate returned from [customVirtioDeviceSaveStateForRestore:](customvirtiodevicesavestate%28forrestore_%29.md).

<a id="discussion"></a>

## Discussion

This method should return `NO` if restore operation failed.
