> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646396-anonymous/kiocatalogmoduleterminate

# kIOCatalogModuleTerminate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOCatalogModuleTerminate
```

<a id="discussion"></a>

## Discussion

Terminates all services which depend on a particular module but does not unload the module.
