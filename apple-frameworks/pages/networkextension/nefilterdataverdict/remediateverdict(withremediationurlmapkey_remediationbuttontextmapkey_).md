> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataverdict/remediateverdict(withremediationurlmapkey:remediationbuttontextmapkey:)](https://developer.apple.com/documentation/networkextension/nefilterdataverdict/remediateverdict(withremediationurlmapkey:remediationbuttontextmapkey:))

# remediateVerdict(withRemediationURLMapKey:remediationButtonTextMapKey:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.

## Declaration

```swift
class func remediateVerdict(withRemediationURLMapKey remediationURLMapKey: String?, remediationButtonTextMapKey: String?) -> NEFilterDataVerdict
```

## Parameters

- `remediationURLMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the URL of the remediation link to give to the user.
- `remediationButtonTextMapKey`: The key in the Filter Control Provider’s `remediationMap` dictionary that corresponds to the text of the remediation link text to give to the user.

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict from one of its data filtering methods, the system resolves the verdict as follows:

1. The system uses the verdict’s `remediationURLMapKey` and `remediationButtonTextMapKey` to look up the remediation URL parameters in the [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary set by the Filter Control Provider.
2. The system then inserts the remediation URL parameters into the block page and presents it to the user.

The user can tap the URL to appeal the decision to drop the flow. This starts the remediation process, if your app provides one.

## See Also

### Creating data verdicts

- [allow()](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [drop()](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pause()](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [needRules()](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [init(passBytes:peekBytes:)](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.

# remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a verdict to drop the current chunk of network data and all subsequent data for the current flow, and provides a remediation URL.

## Declaration

```objectivec
+ (NEFilterDataVerdict *) remediateVerdictWithRemediationURLMapKey:(NSString *) remediationURLMapKey remediationButtonTextMapKey:(NSString *) remediationButtonTextMapKey;
```

## Parameters

- `remediationURLMapKey`: The key in the Filter Control Provider’s [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary corresponding to the URL of the remediation link to give to the user.
- `remediationButtonTextMapKey`: The key in the Filter Control Provider’s `remediationMap` dictionary that corresponds to the text of the remediation link text to give to the user.

<a id="return-value"></a>

## Return Value

A `NEFilterDataVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider returns this verdict from one of its data filtering methods, the system resolves the verdict as follows:

1. The system uses the verdict’s `remediationURLMapKey` and `remediationButtonTextMapKey` to look up the remediation URL parameters in the [remediationMap](../nefiltercontrolprovider/remediationmap.md) dictionary set by the Filter Control Provider.
2. The system then inserts the remediation URL parameters into the block page and presents it to the user.

The user can tap the URL to appeal the decision to drop the flow. This starts the remediation process, if your app provides one.

## See Also

### Creating data verdicts

- [allowVerdict](allow%28%29.md): Creates a verdict that tells the system to pass the current chunk of network data and all subsequent data for the current flow to its final destination.
- [dropVerdict](drop%28%29.md): Creates a verdict that tells the system to drop the current chunk of network data and all subsequent data for the current flow.
- [pauseVerdict](pause%28%29.md): Creates a verdict that tells the system to pause the flow.
- [needRulesVerdict](needrules%28%29.md): Creates a verdict that tells the system that the Filter Control Provider needs to update the rules before making a decision about the flow’s data.
- [dataVerdictWithPassBytes:peekBytes:](init%28passbytes_peekbytes_%29.md): Creates a verdict that tells the system to pass a chunk of network data to its final destination, and specifies the next chunk of data to provide.
