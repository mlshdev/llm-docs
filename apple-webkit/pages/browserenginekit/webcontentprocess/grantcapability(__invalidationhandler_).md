> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/webcontentprocess/grantcapability(_:invalidationhandler:)](https://developer.apple.com/documentation/browserenginekit/webcontentprocess/grantcapability(_:invalidationhandler:))

# grantCapability(\_:invalidationHandler:)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+

Grants the specified capability to the process and observes an invalidation closure.

## Declaration

```swift
func grantCapability(_ capability: ProcessCapability, invalidationHandler: @escaping () -> Void) throws -> ProcessCapability.Grant
```

## Parameters

- `capability`: The capability to grant.
- `invalidationHandler`: A closure that the system calls when the capability becomes invalid.

<a id="return-value"></a>

## Return Value

A [ProcessCapability.Grant](../processcapability/grant.md) object that represents the granted capability.

<a id="discussion"></a>

## Discussion

When the process no longer needs the capability, call [invalidate()](../processcapability/grant/invalidate%28%29.md) on the returned object.

## See Also

### Coordinating processes

- [grantCapability(\_:)](grantcapability%28__%29.md): Grants the specified capability to the process.
- [createVisibilityPropagationInteraction()](createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the web content process.
