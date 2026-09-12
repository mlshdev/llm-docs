> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/networkingprocess/grantcapability(_:)](https://developer.apple.com/documentation/browserenginekit/networkingprocess/grantcapability(_:))

# grantCapability(\_:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Grants the specified capability to the process.

## Declaration

```swift
func grantCapability(_ capability: ProcessCapability) throws -> ProcessCapability.Grant
```

## Parameters

- `capability`: The capability to grant.

<a id="return-value"></a>

## Return Value

A [ProcessCapability.Grant](../processcapability/grant.md) object that represents the granted capability.

<a id="discussion"></a>

## Discussion

When the process no longer needs the capability, call [invalidate()](../processcapability/grant/invalidate%28%29.md) on the returned object.

## See Also

### Coordinating processes

- [grantCapability(\_:invalidationHandler:)](grantcapability%28__invalidationhandler_%29.md): Grants the specified capability to the process, calling the handler when the capability becomes invalid.
