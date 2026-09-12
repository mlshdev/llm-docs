> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/state-swift.property](https://developer.apple.com/documentation/appkit/nsvisualeffectview/state-swift.property)

# state (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that indicates whether a view has a visual effect applied.

## Declaration

```swift
var state: NSVisualEffectView.State { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSVisualEffectView.State.followsWindowActiveState](state-swift.enum/followswindowactivestate.md).

## See Also

### Enabling or Disabling the Effect

- [NSVisualEffectView.State](state-swift.enum.md): Constants to specify how the material appearance should reflect window activity state.

# state (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that indicates whether a view has a visual effect applied.

## Declaration

```objectivec
@property NSVisualEffectState state;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSVisualEffectStateFollowsWindowActiveState](state-swift.enum/followswindowactivestate.md).

## See Also

### Enabling or Disabling the Effect

- [NSVisualEffectState](state-swift.enum.md): Constants to specify how the material appearance should reflect window activity state.
