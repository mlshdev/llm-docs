> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolverdict/allow(withupdaterules:)](https://developer.apple.com/documentation/networkextension/nefiltercontrolverdict/allow(withupdaterules:))

# allow(withUpdateRules:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that all of the flow’s data should be allowed to pass to its final destination, and that the filtering rules have been updated.

## Declaration

```swift
class func allow(withUpdateRules updateRules: Bool) -> NEFilterControlVerdict
```

## Parameters

- `updateRules`: A Boolean indicating if the Filter Control Provider updated the rules.

<a id="return-value"></a>

## Return Value

An `NEFilterControlVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Control Provider passes this verdict to the completion handler passed to its [handleNewFlow(\_:completionHandler:)](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method, the system will allow all of the flow’s data to pass to its final destination. In addition, if the `updateRules` parameter is YES the system will call the Filter Data Provider’s [handleRulesChanged()](../nefilterdataprovider/handleruleschanged%28%29.md) method.

## See Also

### Creating control verdicts

- [drop(withUpdateRules:)](drop%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be dropped, and that the filtering rules have been updated.
- [updateRules()](updaterules%28%29.md): Create a verdict that indicates to the system that the filtering rules have been updated, and that the Filter Data Provider needs to make a decision about the flow’s data.

# allowVerdictWithUpdateRules: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that all of the flow’s data should be allowed to pass to its final destination, and that the filtering rules have been updated.

## Declaration

```objectivec
+ (NEFilterControlVerdict *) allowVerdictWithUpdateRules:(BOOL) updateRules;
```

## Parameters

- `updateRules`: A Boolean indicating if the Filter Control Provider updated the rules.

<a id="return-value"></a>

## Return Value

An `NEFilterControlVerdict` object.

<a id="Discussion"></a>

## Discussion

When the Filter Control Provider passes this verdict to the completion handler passed to its [handleNewFlow:completionHandler:](../nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md) method, the system will allow all of the flow’s data to pass to its final destination. In addition, if the `updateRules` parameter is YES the system will call the Filter Data Provider’s [handleRulesChanged](../nefilterdataprovider/handleruleschanged%28%29.md) method.

## See Also

### Creating control verdicts

- [dropVerdictWithUpdateRules:](drop%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be dropped, and that the filtering rules have been updated.
- [updateRules](updaterules%28%29.md): Create a verdict that indicates to the system that the filtering rules have been updated, and that the Filter Data Provider needs to make a decision about the flow’s data.
