> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/updateparameters()](https://developer.apple.com/documentation/automator/amaction/updateparameters())

# updateParameters() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Requests the action to update its stored set of parameters from the settings in the action’s user interface.

## Declaration

```swift
func updateParameters()
```

<a id="Discussion"></a>

## Discussion

This message sends just before an action is saved, copied, or run. Preferably, an action’s settings should not solely reside in the controls of its view, but if they do, the action can fetch and save them in this method.

## See Also

### Updating Action Parameters

- [parametersUpdated()](parametersupdated%28%29.md): Requests the action to update its user interface from its stored parameters, which have changed.

# updateParameters (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Requests the action to update its stored set of parameters from the settings in the action’s user interface.

## Declaration

```objectivec
- (void) updateParameters;
```

<a id="Discussion"></a>

## Discussion

This message sends just before an action is saved, copied, or run. Preferably, an action’s settings should not solely reside in the controls of its view, but if they do, the action can fetch and save them in this method.

## See Also

### Updating Action Parameters

- [parametersUpdated](parametersupdated%28%29.md): Requests the action to update its user interface from its stored parameters, which have changed.
