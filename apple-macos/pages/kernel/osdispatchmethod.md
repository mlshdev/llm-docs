> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osdispatchmethod

# OSDispatchMethod

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

## Declaration

```objectivec
typedef kern_return_t (*OSDispatchMethod)(OSMetaClassBase *self, const IORPC rpc);
```

## See Also

### Callback Methods

- [OSActionAbortedHandler](osactionabortedhandler.md)
- [OSActionCancelHandler](osactioncancelhandler.md)
- [OSKextRequestResourceCallback](oskextrequestresourcecallback.md): Invoked to provide results for a kext resource request.
- [OSObjectApplierFunction](osobjectapplierfunction.md)
- [OSSerializerBlock](osserializerblock.md)
- [OSSerializerCallback](osserializercallback.md)
