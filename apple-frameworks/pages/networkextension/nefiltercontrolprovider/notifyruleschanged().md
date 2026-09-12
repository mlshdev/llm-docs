> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolprovider/notifyruleschanged()](https://developer.apple.com/documentation/networkextension/nefiltercontrolprovider/notifyruleschanged())

# notifyRulesChanged() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notify the Filter Data Provider that the filtering rules have changed on disk.

## Declaration

```swift
func notifyRulesChanged()
```

<a id="Discussion"></a>

## Discussion

The Filter Control Provider can call this method to notify the Filter Data Provider that the rules changed. It is only necessary to call this method when the update to the rules was not a direct result of a call to [handleNewFlow(\_:completionHandler:)](handlenewflow%28__completionhandler_%29.md).

## See Also

### Handling requests for new rules

- [handleNewFlow(\_:completionHandler:)](handlenewflow%28__completionhandler_%29.md): Handle a request for new filtering rules.

# notifyRulesChanged (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notify the Filter Data Provider that the filtering rules have changed on disk.

## Declaration

```objectivec
- (void) notifyRulesChanged;
```

<a id="Discussion"></a>

## Discussion

The Filter Control Provider can call this method to notify the Filter Data Provider that the rules changed. It is only necessary to call this method when the update to the rules was not a direct result of a call to [handleNewFlow:completionHandler:](handlenewflow%28__completionhandler_%29.md).

## See Also

### Handling requests for new rules

- [handleNewFlow:completionHandler:](handlenewflow%28__completionhandler_%29.md): Handle a request for new filtering rules.
