> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/update(_:using:for:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/update(_:using:for:))

# update(\_:using:for:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+

Updates the verdict for a flow outside the context of any filter data provider callback.

## Declaration

```swift
func update(_ flow: NEFilterSocketFlow, using verdict: NEFilterDataVerdict, for direction: NETrafficDirection)
```

## Parameters

- `flow`: The NEFilterSocketFlow to update the verdict for.
- `verdict`: An [NEFilterDataVerdict](../nefilterdataverdict.md) instance. This must be an [allow()](../nefilterdataverdict/allow%28%29.md) or [drop()](../nefilterdataverdict/drop%28%29.md) verdict, or a data verdict created with the Swift initializer or  ObjectiveC type method, [init(passBytes:peekBytes:)](../nefilterdataverdict/init%28passbytes_peekbytes_%29.md).
- `direction`: The direction to which the verdict applies. Pass [NETrafficDirection.any](../netrafficdirection/any.md) to update the verdict for both the inbound and outbound directions. This parameter has no effect if the verdict is [drop()](../nefilterdataverdict/drop%28%29.md).

# updateFlow:usingVerdict:forDirection: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+

Updates the verdict for a flow outside the context of any filter data provider callback.

## Declaration

```objectivec
- (void) updateFlow:(NEFilterSocketFlow *) flow usingVerdict:(NEFilterDataVerdict *) verdict forDirection:(NETrafficDirection) direction;
```

## Parameters

- `flow`: The NEFilterSocketFlow to update the verdict for.
- `verdict`: An [NEFilterDataVerdict](../nefilterdataverdict.md) instance. This must be an [allowVerdict](../nefilterdataverdict/allow%28%29.md) or [dropVerdict](../nefilterdataverdict/drop%28%29.md) verdict, or a data verdict created with the Swift initializer or  ObjectiveC type method, [dataVerdictWithPassBytes:peekBytes:](../nefilterdataverdict/init%28passbytes_peekbytes_%29.md).
- `direction`: The direction to which the verdict applies. Pass [NETrafficDirectionAny](../netrafficdirection/any.md) to update the verdict for both the inbound and outbound directions. This parameter has no effect if the verdict is [dropVerdict](../nefilterdataverdict/drop%28%29.md).
