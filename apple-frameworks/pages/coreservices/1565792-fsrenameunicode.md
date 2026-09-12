> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565792-fsrenameunicode](https://developer.apple.com/documentation/coreservices/1565792-fsrenameunicode)

# FSRenameUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSRenameUnicode(const FSRef *ref, UniCharCount nameLength, const UniChar *name, TextEncoding textEncodingHint, FSRef *newRef);
```

## See Also

### Moving and Renaming Files or Directories

- [PBMoveObjectSync](1565935-pbmoveobjectsync.md): Deprecated.
- [FSMoveObjectAsync](1566762-fsmoveobjectasync.md): Deprecated.
- [FSMoveObject](1566291-fsmoveobject.md): Deprecated.
- [PBMoveObjectAsync](1566270-pbmoveobjectasync.md): Deprecated.
- [PBRenameUnicodeAsync](1566334-pbrenameunicodeasync.md): Deprecated.
- [PBRenameUnicodeSync](1566879-pbrenameunicodesync.md): Deprecated.
