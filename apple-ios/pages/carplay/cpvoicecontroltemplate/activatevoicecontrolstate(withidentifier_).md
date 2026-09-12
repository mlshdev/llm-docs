> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontroltemplate/activatevoicecontrolstate(withidentifier:)](https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate/activatevoicecontrolstate(withidentifier:))

# activateVoiceControlState(withIdentifier:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Changes the template’s state to the one matching the specified identifier.

## Declaration

```swift
func activateVoiceControlState(withIdentifier identifier: String)
```

## Parameters

- `identifier`: An identifier corresponding to one of the [voiceControlStates](voicecontrolstates.md) associated with the template.

<a id="Discussion"></a>

## Discussion

Your app must present the voice control template using its [CPInterfaceController](../cpinterfacecontroller.md) object before the app can activate a new state. Calling this method before presenting the template has no effect on the active state.

> **Note**

>  The voice control template applies a rate limit for voice control states, ignoring state changes occurring too rapidly or frequently in a short period of time.

## See Also

### Activating a State

- [activeStateIdentifier](activestateidentifier.md): The identifier of the template’s current voice control state.

# activateVoiceControlStateWithIdentifier: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Changes the template’s state to the one matching the specified identifier.

## Declaration

```objectivec
- (void) activateVoiceControlStateWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: An identifier corresponding to one of the [voiceControlStates](voicecontrolstates.md) associated with the template.

<a id="Discussion"></a>

## Discussion

Your app must present the voice control template using its [CPInterfaceController](../cpinterfacecontroller.md) object before the app can activate a new state. Calling this method before presenting the template has no effect on the active state.

> **Note**

>  The voice control template applies a rate limit for voice control states, ignoring state changes occurring too rapidly or frequently in a short period of time.

## See Also

### Activating a State

- [activeStateIdentifier](activestateidentifier.md): The identifier of the template’s current voice control state.
