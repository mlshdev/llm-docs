> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1566339-fspathmakerefwithoptions

# FSPathMakeRefWithOptions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSPathMakeRefWithOptions(const UInt8 *path, OptionBits options, FSRef *ref, Boolean *isDirectory);
```

## See Also

### Converting Between Paths and FSRef Structures

- [FSRefMakePath](1565635-fsrefmakepath.md): Deprecated.
- [FSPathMakeRef](1565195-fspathmakeref.md): Deprecated.
