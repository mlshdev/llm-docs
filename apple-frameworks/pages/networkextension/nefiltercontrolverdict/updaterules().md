> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolverdict/updaterules()](https://developer.apple.com/documentation/networkextension/nefiltercontrolverdict/updaterules())

# updateRules() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the filtering rules have been updated, and that the Filter Data Provider needs to make a decision about the flow’s data.

## Declaration

```swift
class func updateRules() -> NEFilterControlVerdict
```

<a id="return-value"></a>

## Return Value

An `NEFilterControlVerdict` object.

## See Also

### Creating control verdicts

- [allow(withUpdateRules:)](allow%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be allowed to pass to its final destination, and that the filtering rules have been updated.
- [drop(withUpdateRules:)](drop%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be dropped, and that the filtering rules have been updated.

# updateRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a verdict that indicates to the system that the filtering rules have been updated, and that the Filter Data Provider needs to make a decision about the flow’s data.

## Declaration

```objectivec
+ (NEFilterControlVerdict *) updateRules;
```

<a id="return-value"></a>

## Return Value

An `NEFilterControlVerdict` object.

## See Also

### Creating control verdicts

- [allowVerdictWithUpdateRules:](allow%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be allowed to pass to its final destination, and that the filtering rules have been updated.
- [dropVerdictWithUpdateRules:](drop%28withupdaterules_%29.md): Create a verdict that indicates to the system that all of the flow’s data should be dropped, and that the filtering rules have been updated.
