> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/shiftkeystatechanged(fromstate:tostate:)](https://developer.apple.com/documentation/browserenginekit/betextinput/shiftkeystatechanged(fromstate:tostate:))

# shiftKeyStateChanged(fromState:toState:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates a transition in the state of the Shift key.

## Declaration

```swift
func shiftKeyStateChanged(fromState oldState: BEKeyModifierFlags, toState newState: BEKeyModifierFlags)
```

## Parameters

- `oldState`: The previous state of the Shift key.
- `newState`: The new state of the Shift key.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system invokes this method when a person presses or releases the Shift key, or toggles the Caps Lock key.

# shiftKeyStateChangedFromState:toState: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates a transition in the state of the Shift key.

## Declaration

```objectivec
- (void) shiftKeyStateChangedFromState:(BEKeyModifierFlags) oldState toState:(BEKeyModifierFlags) newState;
```

## Parameters

- `oldState`: The previous state of the Shift key.
- `newState`: The new state of the Shift key.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The system invokes this method when a person presses or releases the Shift key, or toggles the Caps Lock key.
