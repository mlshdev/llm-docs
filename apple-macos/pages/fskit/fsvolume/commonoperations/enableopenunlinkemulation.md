> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/enableopenunlinkemulation](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/enableopenunlinkemulation)

# enableOpenUnlinkEmulation (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A property that allows the file system to use open-unlink emulation.

## Declaration

```swift
optional var enableOpenUnlinkEmulation: Bool { get }
```

<a id="discussion"></a>

## Discussion

*Open-unlink* functionality refers to a file system’s ability to support an open file being fully unlinked from the file system namespace. If a file system doesn’t support this functionality, FSKit can emulate it instead; this is called “open-unlink emulation”.

Implement this property to return `true` (Swift) or `YES` (Objective-C) to allow FSKit to perform open-unlink emulation. If you don’t implement this property at all, FSKit doesn’t perform open-unlink emulation for this volume.

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

# enableOpenUnlinkEmulation (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A property that allows the file system to use open-unlink emulation.

## Declaration

```objectivec
@property (readonly) BOOL enableOpenUnlinkEmulation;
```

<a id="discussion"></a>

## Discussion

*Open-unlink* functionality refers to a file system’s ability to support an open file being fully unlinked from the file system namespace. If a file system doesn’t support this functionality, FSKit can emulate it instead; this is called “open-unlink emulation”.

Implement this property to return `true` (Swift) or `YES` (Objective-C) to allow FSKit to perform open-unlink emulation. If you don’t implement this property at all, FSKit doesn’t perform open-unlink emulation for this volume.

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.
