> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isportraiteffectenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isportraiteffectenabled)

# isPortraitEffectEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.

## Declaration

```swift
class var isPortraitEffectEnabled: Bool { get }
```

## See Also

### Inspecting the Portrait Effect settings

- [isPortraitEffectActive](isportraiteffectactive.md): A Boolean value that indicates whether the Portrait video effect is active on a device.

# portraitEffectEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.

## Declaration

```objectivec
@property (class, readonly, getter=isPortraitEffectEnabled) BOOL portraitEffectEnabled;
```

## See Also

### Inspecting the Portrait Effect settings

- [portraitEffectActive](isportraiteffectactive.md): A Boolean value that indicates whether the Portrait video effect is active on a device.
