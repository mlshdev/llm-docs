> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osmetaclassbase/getmetaclass

# getMetaClass

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Internal helper for GetClassName. Not to be called directly.

## Declaration

```objectivec
virtual const OSMetaClass * getMetaClass() const;
```

## See Also

### Getting Meta Information

- [IsRemote](isremote.md)
- [GetClass](getclass.md): Internal helper for GetClassName. Not to be called directly.
- [GetClassName](getclassname-50b5y.md): Returns the name of the class given an OSObject pointer.
