> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsswitch/state](https://developer.apple.com/documentation/appkit/nsswitch/state)

# state (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The current position of the switch.

## Declaration

```swift
var state: NSControl.StateValue { get set }
```

<a id="Discussion"></a>

## Discussion

The values [off](../nscontrol/statevalue/off.md) and [on](../nscontrol/statevalue/on.md) indicate that the switch is in the off or on position. The switch treats any value other than [off](../nscontrol/statevalue/off.md) as on.

Setting this property through the [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy animates the switch to the new value.

# state (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The current position of the switch.

## Declaration

```objectivec
@property NSControlStateValue state;
```

<a id="Discussion"></a>

## Discussion

The values [NSControlStateValueOff](../nscontrol/statevalue/off.md) and [NSControlStateValueOn](../nscontrol/statevalue/on.md) indicate that the switch is in the off or on position. The switch treats any value other than [NSControlStateValueOff](../nscontrol/statevalue/off.md) as on.

Setting this property through the [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy animates the switch to the new value.
