> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1558295-ioprintplane

# IOPrintPlane

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
void IOPrintPlane(const IORegistryPlane *plane);
```

## See Also

### Driver Registry

- [IORegistryEntry](ioregistryentry.md): The base class for all objects in the registry.
- [IORegistryIterator](ioregistryiterator.md): An iterator over the registry.
- [IOBSDNameMatching](1575336-iobsdnamematching.md): Create a matching dictionary that specifies an IOService match based on BSD device name.
- [Registry Utilities](iokit_fundamentals/registry_utilities.md)
- [Registry Keys](iokit_fundamentals/registry_keys.md)
