> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/benetworkingprocess/grantcapability:error:](https://developer.apple.com/documentation/browserenginekit/benetworkingprocess/grantcapability:error:)

# grantCapability:error:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Grants the specified capability to the process.

## Declaration

```objectivec
- (id<BEProcessCapabilityGrant>) grantCapability:(BEProcessCapability *) capability error:(NSError **) error;
```

## Parameters

- `capability`: The capability to grant.
- `error`: If an error occurs, upon return contains an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the problem. If you don’t want information about errors that happen, pass in `NULL`.

<a id="return-value"></a>

## Return Value

A [BEProcessCapabilityGrant](../beprocesscapabilitygrant.md) object that represents the granted capability, or `nil` if an error occurs.

<a id="discussion"></a>

## Discussion

When the process no longer needs the capability, call [invalidate](../beprocesscapabilitygrant/invalidate.md) on the returned object.

## See Also

### Coordinating processes

- [grantCapability:error:invalidationHandler:](grantcapability_error_invalidationhandler_.md): Grants the specified capability to the process and observes an invalidation closure.
