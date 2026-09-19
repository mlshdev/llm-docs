> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osserializercallback

# OSSerializerCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef bool (*OSSerializerCallback)(void *target, void *ref, OSSerialize *serializer);
```

## See Also

### Callback Methods

- [OSActionAbortedHandler](osactionabortedhandler.md)
- [OSActionCancelHandler](osactioncancelhandler.md)
- [OSDispatchMethod](osdispatchmethod.md)
- [OSKextRequestResourceCallback](oskextrequestresourcecallback.md): Invoked to provide results for a kext resource request.
- [OSObjectApplierFunction](osobjectapplierfunction.md)
- [OSSerializerBlock](osserializerblock.md)
