> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/pause()](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/pause())

# pause() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a verdict that tells the system to pause the flow.

## Declaration

```swift
class func pause() -> NEFilterDataVerdict
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

After pausing the flow, the system doesn’t call any of the data provider’s handler callbacks until you resume the flow by calling [resumeFlow(\_:with:)](../nefilterdataprovider/resumeflow%28__with_%29.md).

You can pause TCP flows indefinitely. You can pause UDP flows for up to 10 seconds, after which the system drops the flow. Pausing a flow that’s already paused is an invalid operation.

## See Also

### Creating data verdicts

- [allow()](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [drop()](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRules()](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [init(passBytes:peekBytes:)](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

# pauseVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a verdict that tells the system to pause the flow.

## Declaration

```objectivec
+ (NEFilterDataVerdict *) pauseVerdict;
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

After pausing the flow, the system doesn’t call any of the data provider’s handler callbacks until you resume the flow by calling [resumeFlow:withVerdict:](../nefilterdataprovider/resumeflow%28__with_%29.md).

You can pause TCP flows indefinitely. You can pause UDP flows for up to 10 seconds, after which the system drops the flow. Pausing a flow that’s already paused is an invalid operation.

## See Also

### Creating data verdicts

- [allowVerdict](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [dropVerdict](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRulesVerdict](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [dataVerdictWithPassBytes:peekBytes:](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.
