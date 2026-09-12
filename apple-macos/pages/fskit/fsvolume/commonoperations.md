> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations)

# FSVolume.CommonOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Methods common to `FSVolumeHandler` and `FSVolumeOperations`

## Declaration

```swift
protocol CommonOperations
```

## Topics

### Instance Properties

- [enableOpenUnlinkEmulation](commonoperations/enableopenunlinkemulation.md): A property that allows the file system to use open-unlink emulation.
- [requestedMountOptions](commonoperations/requestedmountoptions.md): A property that allows the file system to request for specific mount options from FSKit.
- [supportedVolumeCapabilities](commonoperations/supportedvolumecapabilities.md): A property that provides the supported capabilities of the volume.
- [volumeStatistics](commonoperations/volumestatistics.md): A property that provides up-to-date statistics of the volume.

### Instance Methods

- [mount(options:replyHandler:)](commonoperations/mount%28options_replyhandler_%29.md): Mounts this volume, using the specified options.
- [reclaimItem(\_:replyHandler:)](commonoperations/reclaimitem%28__replyhandler_%29.md): Reclaims an item, releasing any resources allocated for the item.
- [synchronize(flags:replyHandler:)](commonoperations/synchronize%28flags_replyhandler_%29.md): Synchronizes the volume with its underlying resource.
- [unmount(replyHandler:)](commonoperations/unmount%28replyhandler_%29.md): Unmounts this volume.

## Relationships

### Inherited By

- [FSVolume.Handler](handler.md)
- [FSVolume.Operations](operations.md)

# FSVolumeCommonOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Methods common to `FSVolumeHandler` and `FSVolumeOperations`

## Declaration

```objectivec
@protocol FSVolumeCommonOperations
```

## Topics

### Instance Properties

- [enableOpenUnlinkEmulation](commonoperations/enableopenunlinkemulation.md): A property that allows the file system to use open-unlink emulation.
- [requestedMountOptions](commonoperations/requestedmountoptions.md): A property that allows the file system to request for specific mount options from FSKit.
- [supportedVolumeCapabilities](commonoperations/supportedvolumecapabilities.md): A property that provides the supported capabilities of the volume.
- [volumeStatistics](commonoperations/volumestatistics.md): A property that provides up-to-date statistics of the volume.

### Instance Methods

- [mountWithOptions:replyHandler:](commonoperations/mount%28options_replyhandler_%29.md): Mounts this volume, using the specified options.
- [reclaimItem:replyHandler:](commonoperations/reclaimitem%28__replyhandler_%29.md): Reclaims an item, releasing any resources allocated for the item.
- [synchronizeWithFlags:replyHandler:](commonoperations/synchronize%28flags_replyhandler_%29.md): Synchronizes the volume with its underlying resource.
- [unmountWithReplyHandler:](commonoperations/unmount%28replyhandler_%29.md): Unmounts this volume.

## Relationships

### Inherited By

- [FSVolumeHandler](handler.md)
- [FSVolumeOperations](operations.md)
