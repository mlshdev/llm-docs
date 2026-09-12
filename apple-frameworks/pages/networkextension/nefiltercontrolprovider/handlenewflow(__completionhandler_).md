> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolprovider/handlenewflow(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nefiltercontrolprovider/handlenewflow(_:completionhandler:))

# handleNewFlow(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a request for new filtering rules.

## Declaration

```swift
func handleNewFlow(_ flow: NEFilterFlow, completionHandler: @escaping @Sendable (NEFilterControlVerdict) -> Void)
```

```swift
func handleNewFlow(_ flow: NEFilterFlow) async -> NEFilterControlVerdict
```

## Parameters

- `flow`: A `NEFilterFlow` object containing details about the flow of network content.
- `completionHandler`: A block to be executed when the rules have been updated.

<a id="Discussion"></a>

## Discussion

The system calls this method when the Filter Data Provider indicates that it needs more rules before making a decision about a new flow.

The Filter Control Provider is expected to fetch new rules and write them to disk in a location that is readable by the Filter Data Provider. In addition to updating the rules, the Filter Control Provider can itself make a pass/block decision for the new flow, and return it when executing the `completionHandler` block.

NEFilterControlProvider subclasses must override this method.

## See Also

### Handling requests for new rules

- [notifyRulesChanged()](notifyruleschanged%28%29.md): Notify the Filter Data Provider that the filtering rules have changed on disk.

# handleNewFlow:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handle a request for new filtering rules.

## Declaration

```objectivec
- (void) handleNewFlow:(NEFilterFlow *) flow completionHandler:(void (^)(NEFilterControlVerdict *)) completionHandler;
```

## Parameters

- `flow`: A `NEFilterFlow` object containing details about the flow of network content.
- `completionHandler`: A block to be executed when the rules have been updated.

<a id="Discussion"></a>

## Discussion

The system calls this method when the Filter Data Provider indicates that it needs more rules before making a decision about a new flow.

The Filter Control Provider is expected to fetch new rules and write them to disk in a location that is readable by the Filter Data Provider. In addition to updating the rules, the Filter Control Provider can itself make a pass/block decision for the new flow, and return it when executing the `completionHandler` block.

NEFilterControlProvider subclasses must override this method.

## See Also

### Handling requests for new rules

- [notifyRulesChanged](notifyruleschanged%28%29.md): Notify the Filter Data Provider that the filtering rules have changed on disk.
