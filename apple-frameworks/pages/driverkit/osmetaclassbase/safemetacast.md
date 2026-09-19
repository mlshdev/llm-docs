> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osmetaclassbase/safemetacast

# safeMetaCast

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Internal helper for OSDynamicCast. Not to be called directly.

## Declaration

```objectivec
static OSMetaClassBase * safeMetaCast(const OSMetaClassBase *anObject, const OSMetaClass *toMeta);
```

## See Also

### Casting to Different Types

- [requiredMetaCast](requiredmetacast.md): Internal helper for OSRequiredCast. Not to be called directly.
