> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/benetworkingprocess/grantcapability:error:invalidationhandler:](https://developer.apple.com/documentation/browserenginekit/benetworkingprocess/grantcapability:error:invalidationhandler:)

# grantCapability:error:invalidationHandler:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+

Grants the specified capability to the process and observes an invalidation closure.

## Declaration

```objectivec
- (id<BEProcessCapabilityGrant>) grantCapability:(BEProcessCapability *) capability error:(NSError **) error invalidationHandler:(void (^)()) invalidationHandler;
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

- [grantCapability:error:](grantcapability_error_.md): Grants the specified capability to the process.
