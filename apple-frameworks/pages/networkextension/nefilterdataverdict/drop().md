> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/drop()](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/drop())

# drop() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.

## Declaration

```swift
class func drop() -> NEFilterDataVerdict
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

## See Also

### Creating data verdicts

- [allow()](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:)](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRules()](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [init(passBytes:peekBytes:)](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

# dropVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.

## Declaration

```objectivec
+ (NEFilterDataVerdict *) dropVerdict;
```

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

## See Also

### Creating data verdicts

- [allowVerdict](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:](remediateverdict%28withremediationurlmapkey_remediationbuttontextmapkey_%29.md): Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.
- [needRulesVerdict](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [dataVerdictWithPassBytes:peekBytes:](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.
