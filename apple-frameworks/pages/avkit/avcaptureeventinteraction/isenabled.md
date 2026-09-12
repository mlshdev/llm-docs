> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventinteraction/isenabled](https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/isenabled)

# isEnabled (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

A Boolean value that indicates whether this capture event interaction is in an enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to `false` when your app can’t or won’t respond to the action callbacks to avoid non-interactive buttons or UI elements.

## See Also

### Inspecting the interaction

- [defaultCaptureSoundDisabled](defaultcapturesounddisabled.md): A Boolean value that indicates whether the default sound is in a disabled state.

# enabled (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

A Boolean value that indicates whether this capture event interaction is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Set this value to `false` when your app can’t or won’t respond to the action callbacks to avoid non-interactive buttons or UI elements.

## See Also

### Inspecting the interaction

- [defaultCaptureSoundDisabled](defaultcapturesounddisabled.md): A Boolean value that indicates whether the default sound is in a disabled state.
