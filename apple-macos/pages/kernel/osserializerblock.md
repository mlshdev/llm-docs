> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osserializerblock

# OSSerializerBlock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.14+

## Declaration

```objectivec
typedef bool (^OSSerializerBlock)(OSSerialize *serializer);
```

## See Also

### Callback Methods

- [OSActionAbortedHandler](osactionabortedhandler.md)
- [OSActionCancelHandler](osactioncancelhandler.md)
- [OSDispatchMethod](osdispatchmethod.md)
- [OSKextRequestResourceCallback](oskextrequestresourcecallback.md): Invoked to provide results for a kext resource request.
- [OSObjectApplierFunction](osobjectapplierfunction.md)
- [OSSerializerCallback](osserializercallback.md)
