> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/renameoperations/isvolumerenameinhibited](https://developer.apple.com/documentation/fskit/fsvolume/renameoperations/isvolumerenameinhibited)

# isVolumeRenameInhibited (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+ (deprecated in 27.0)

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```swift
optional var isVolumeRenameInhibited: Bool { get set }
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.

# volumeRenameInhibited (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+ (deprecated in 27.0)

A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Declaration

```objectivec
@property (getter=isVolumeRenameInhibited) BOOL volumeRenameInhibited;
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the file system replies to the `loadResource` message. Changing the returned value during the runtime of the volume has no effect.
