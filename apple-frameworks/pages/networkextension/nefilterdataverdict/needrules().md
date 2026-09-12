> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/needrules()](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/needrules())

# needRules() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.

## Declaration

```swift
class func needRules() -> NEFilterDataVerdict
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict, the system passes the flow to the Filter Control Provider’s [handleNewFlow(\_:completionHandler:)](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method.

## See Also

### Creating data verdicts

- [allow()](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [drop()](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [init(passBytes:peekBytes:)](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

# needRulesVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.

## Declaration

```objectivec
+ (NEFilterDataVerdict *) needRulesVerdict;
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict, the system passes the flow to the Filter Control Provider’s [handleNewFlow:completionHandler:](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method.

## See Also

### Creating data verdicts

- [allowVerdict](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [dropVerdict](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [dataVerdictWithPassBytes:peekBytes:](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.
