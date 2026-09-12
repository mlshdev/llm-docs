> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osmetaclassbase/getclassname-50b5y](https://developer.apple.com/documentation/driverkit/osmetaclassbase/getclassname-50b5y)

# GetClassName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the name of the class given an OSObject pointer.

## Declaration

```objectivec
const char * GetClassName();
```

<a id="return-value"></a>

## Return Value

C-string class name, valid while the object is retained.

## See Also

### Getting Meta Information

- [IsRemote](isremote.md)
- [GetClass](getclass.md): Internal helper for GetClassName. Not to be called directly.
- [getMetaClass](getmetaclass.md): Internal helper for GetClassName. Not to be called directly.
