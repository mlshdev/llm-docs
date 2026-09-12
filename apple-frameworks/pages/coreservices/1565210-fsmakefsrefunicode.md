> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565210-fsmakefsrefunicode](https://developer.apple.com/documentation/coreservices/1565210-fsmakefsrefunicode)

# FSMakeFSRefUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSMakeFSRefUnicode(const FSRef *parentRef, UniCharCount nameLength, const UniChar *name, TextEncoding textEncodingHint, FSRef *newRef);
```

## See Also

### Creating a File System Reference (FSRef)

- [PBMakeFSRefUnicodeSync](1566925-pbmakefsrefunicodesync.md): Deprecated.
- [PBMakeFSRefUnicodeAsync](1566268-pbmakefsrefunicodeasync.md): Deprecated.
