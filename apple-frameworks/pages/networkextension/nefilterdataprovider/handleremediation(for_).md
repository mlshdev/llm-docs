> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/handleremediation(for:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/handleremediation(for:))

# handleRemediation(for:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a remediation request.

## Declaration

```swift
func handleRemediation(for flow: NEFilterFlow) -> NEFilterRemediationVerdict
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.

<a id="return-value"></a>

## Return Value

An [NEFilterRemediationVerdict](../nefilterremediationverdict.md) object indicating how the system should handle the flow of network content.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user taps or clicks on the remediation link in the “block” web page in a WebKit browser object and the target of the remediation link is not set to a web page.

`NEFilterDataProvider` subclasses must override this method.

# handleRemediationForFlow: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a remediation request.

## Declaration

```objectivec
- (NEFilterRemediationVerdict *) handleRemediationForFlow:(NEFilterFlow *) flow;
```

## Parameters

- `flow`: An [NEFilterFlow](../nefilterflow.md) object containing information about the flow.

<a id="return-value"></a>

## Return Value

An [NEFilterRemediationVerdict](../nefilterremediationverdict.md) object indicating how the system should handle the flow of network content.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user taps or clicks on the remediation link in the “block” web page in a WebKit browser object and the target of the remediation link is not set to a web page.

`NEFilterDataProvider` subclasses must override this method.
