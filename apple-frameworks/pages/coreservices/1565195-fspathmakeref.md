> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565195-fspathmakeref](https://developer.apple.com/documentation/coreservices/1565195-fspathmakeref)

# FSPathMakeRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSPathMakeRef(const UInt8 *path, FSRef *ref, Boolean *isDirectory);
```

## See Also

### Converting Between Paths and FSRef Structures

- [FSRefMakePath](1565635-fsrefmakepath.md): Deprecated.
- [FSPathMakeRefWithOptions](1566339-fspathmakerefwithoptions.md): Deprecated.
