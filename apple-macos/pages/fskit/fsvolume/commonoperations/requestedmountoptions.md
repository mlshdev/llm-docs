> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/requestedmountoptions](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/requestedmountoptions)

# requestedMountOptions (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.4+

A property that allows the file system to request for specific mount options from FSKit.

## Declaration

```swift
optional var requestedMountOptions: FSVolume.MountOptions { get }
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the volume replies to the `mount(options:)` call. Changing the returned value during the runtime of the volume has no effect.

# requestedMountOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.4+

A property that allows the file system to request for specific mount options from FSKit.

## Declaration

```objectivec
@property (readonly) FSMountOptions requestedMountOptions;
```

<a id="discussion"></a>

## Discussion

FSKit reads this value after the volume replies to the `mount(options:)` call. Changing the returned value during the runtime of the volume has no effect.
