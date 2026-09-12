> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontroltemplate/activestateidentifier](https://developer.apple.com/documentation/carplay/cpvoicecontroltemplate/activestateidentifier)

# activeStateIdentifier (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The identifier of the template’s current voice control state.

## Declaration

```swift
var activeStateIdentifier: String? { get }
```

## See Also

### Activating a State

- [activateVoiceControlState(withIdentifier:)](activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.

# activeStateIdentifier (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The identifier of the template’s current voice control state.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * activeStateIdentifier;
```

## See Also

### Activating a State

- [activateVoiceControlStateWithIdentifier:](activatevoicecontrolstate%28withidentifier_%29.md): Changes the template’s state to the one matching the specified identifier.
