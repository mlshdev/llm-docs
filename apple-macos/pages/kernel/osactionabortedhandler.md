> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osactionabortedhandler

# OSActionAbortedHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

## Declaration

```objectivec
typedef void (^OSActionAbortedHandler)(void);
```

## See Also

### Callback Methods

- [OSActionCancelHandler](osactioncancelhandler.md)
- [OSDispatchMethod](osdispatchmethod.md)
- [OSKextRequestResourceCallback](oskextrequestresourcecallback.md): Invoked to provide results for a kext resource request.
- [OSObjectApplierFunction](osobjectapplierfunction.md)
- [OSSerializerBlock](osserializerblock.md)
- [OSSerializerCallback](osserializercallback.md)
