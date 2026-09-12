> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterremediationverdict/drop()](https://developer.apple.com/documentation/networkextension/nefilterremediationverdict/drop())

# drop() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the Filter Data Provider will continue to block the flow of network data if/when the flow is requested again.

## Declaration

```swift
class func drop() -> NEFilterRemediationVerdict
```

<a id="return-value"></a>

## Return Value

A `NEFilterRemediationVerdict` object.

## See Also

### Creating remediation verdicts

- [allow()](allow%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider will allow the flow to pass to its final destination when/if the flow is requested again.
- [needRules()](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs the filtering rules to be updated before it can make a remediation decision about the current flow of network data.

# dropVerdict (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the Filter Data Provider will continue to block the flow of network data if/when the flow is requested again.

## Declaration

```objectivec
+ (NEFilterRemediationVerdict *) dropVerdict;
```

<a id="return-value"></a>

## Return Value

A `NEFilterRemediationVerdict` object.

## See Also

### Creating remediation verdicts

- [allowVerdict](allow%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider will allow the flow to pass to its final destination when/if the flow is requested again.
- [needRulesVerdict](needrules%28%29.md): Create a verdict that indicates to the system that the Filter Data Provider needs the filtering rules to be updated before it can make a remediation decision about the current flow of network data.
