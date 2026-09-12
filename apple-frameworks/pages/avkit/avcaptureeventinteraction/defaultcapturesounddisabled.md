> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventinteraction/defaultcapturesounddisabled](https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/defaultcapturesounddisabled)

# defaultCaptureSoundDisabled (Swift)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the default sound is in a disabled state.

## Declaration

```swift
class var defaultCaptureSoundDisabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `true`, you must handle sound playback for capture events manually using the [play(\_:)](../avcaptureevent/play%28__%29.md) method.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Inspecting the interaction

- [isEnabled](isenabled.md): A Boolean value that indicates whether this capture event interaction is in an enabled state.

# defaultCaptureSoundDisabled (Objective-C)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether the default sound is in a disabled state.

## Declaration

```objectivec
@property (class, nonatomic, readwrite) BOOL defaultCaptureSoundDisabled;
```

<a id="discussion"></a>

## Discussion

If `true`, you must handle sound playback for capture events manually using the [playSound:](../avcaptureevent/play%28__%29.md) method.

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## See Also

### Inspecting the interaction

- [enabled](isenabled.md): A Boolean value that indicates whether this capture event interaction is in an enabled state.
