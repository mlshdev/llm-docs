> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osmetaclassbase/requiredmetacast](https://developer.apple.com/documentation/driverkit/osmetaclassbase/requiredmetacast)

# requiredMetaCast

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Internal helper for OSRequiredCast. Not to be called directly.

## Declaration

```objectivec
static OSMetaClassBase * requiredMetaCast(const OSMetaClassBase *anObject, const OSMetaClass *toMeta);
```

## See Also

### Casting to Different Types

- [safeMetaCast](safemetacast.md): Internal helper for OSDynamicCast. Not to be called directly.
