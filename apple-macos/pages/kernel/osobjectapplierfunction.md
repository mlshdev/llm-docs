> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osobjectapplierfunction

# OSObjectApplierFunction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*OSObjectApplierFunction)(OSObject *object, void *context);
```

## See Also

### Callback Methods

- [OSActionAbortedHandler](osactionabortedhandler.md)
- [OSActionCancelHandler](osactioncancelhandler.md)
- [OSDispatchMethod](osdispatchmethod.md)
- [OSKextRequestResourceCallback](oskextrequestresourcecallback.md): Invoked to provide results for a kext resource request.
- [OSSerializerBlock](osserializerblock.md)
- [OSSerializerCallback](osserializercallback.md)
