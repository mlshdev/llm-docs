> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566508-fssetforkposition](https://developer.apple.com/documentation/coreservices/1566508-fssetforkposition)

# FSSetForkPosition

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSSetForkPosition(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset);
```

## See Also

### Manipulating File Position

- [FSGetForkPosition](1565089-fsgetforkposition.md): Deprecated.
- [PBSetForkPositionSync](1566035-pbsetforkpositionsync.md): Deprecated.
- [PBGetForkPositionSync](1565594-pbgetforkpositionsync.md): Deprecated.
- [PBGetForkPositionAsync](1566418-pbgetforkpositionasync.md): Deprecated.
- [PBSetForkPositionAsync](1565887-pbsetforkpositionasync.md): Deprecated.
