> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentprocess/grantcapability:error:invalidationhandler:](https://developer.apple.com/documentation/browserenginekit/bewebcontentprocess/grantcapability:error:invalidationhandler:)

# grantCapability:error:invalidationHandler:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+

Grants the specified capability to the process, invoking the handler when the capability becomes invalid.

## Declaration

```objectivec
- (id<BEProcessCapabilityGrant>) grantCapability:(BEProcessCapability *) capability error:(NSError **) error invalidationHandler:(void (^)()) invalidationHandler;
```

## Parameters

- `capability`: The capability to grant.
- `error`: If an error occurs, upon return contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the problem. If you don’t want information about errors that happen, pass in `NULL`.
- `invalidationHandler`: A block the system calls when the capability becomes invalid.

<a id="return-value"></a>

## Return Value

A [BEProcessCapabilityGrant](../beprocesscapabilitygrant.md) object that represents the granted capability, or `nil` if an error occurs.

<a id="discussion"></a>

## Discussion

When the process no longer needs the capability, call [invalidate](../beprocesscapabilitygrant/invalidate.md) on the returned object.

## See Also

### Coordinating processes

- [grantCapability:error:](grantcapability_error_.md): Grants the specified capability to the process.
- [createVisibilityPropagationInteraction](createvisibilitypropagationinteraction.md): Returns an interaction that associates a view with the web content process.
