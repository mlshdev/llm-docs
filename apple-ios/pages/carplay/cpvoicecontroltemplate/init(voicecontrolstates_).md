> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontroltemplate/init(voicecontrolstates:)](https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate/init(voicecontrolstates:))

# init(voiceControlStates:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a voice control template with a list of voice control states.

## Declaration

```swift
init(voiceControlStates: [CPVoiceControlState])
```

## Parameters

- `voiceControlStates`: An array of voice control states associated with the template. You can provide up to five states. If you provide more, the template ignores any states after the first five in the array.

<a id="return-value"></a>

## Return Value

A newly initialized voice control template.

<a id="Discussion"></a>

## Discussion

When presenting the voice control template for the first time, the template defaults to the first state in the `voiceControlStates` array. You can change the state after presenting the template by calling the [activateVoiceControlState(withIdentifier:)](activatevoicecontrolstate%28withidentifier_%29.md) method.

## See Also

### Creating a Voice Control Template

- [CPVoiceControlState](../cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

# initWithVoiceControlStates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a voice control template with a list of voice control states.

## Declaration

```objectivec
- (instancetype) initWithVoiceControlStates:(NSArray<CPVoiceControlState *> *) voiceControlStates;
```

## Parameters

- `voiceControlStates`: An array of voice control states associated with the template. You can provide up to five states. If you provide more, the template ignores any states after the first five in the array.

<a id="return-value"></a>

## Return Value

A newly initialized voice control template.

<a id="Discussion"></a>

## Discussion

When presenting the voice control template for the first time, the template defaults to the first state in the `voiceControlStates` array. You can change the state after presenting the template by calling the [activateVoiceControlStateWithIdentifier:](activatevoicecontrolstate%28withidentifier_%29.md) method.

## See Also

### Creating a Voice Control Template

- [CPVoiceControlState](../cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.
