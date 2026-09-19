> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565089-fsgetforkposition

# FSGetForkPosition

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSGetForkPosition(FSIORefNum forkRefNum, SInt64 *position);
```

## See Also

### Manipulating File Position

- [PBSetForkPositionSync](1566035-pbsetforkpositionsync.md): Deprecated.
- [PBGetForkPositionSync](1565594-pbgetforkpositionsync.md): Deprecated.
- [PBGetForkPositionAsync](1566418-pbgetforkpositionasync.md): Deprecated.
- [FSSetForkPosition](1566508-fssetforkposition.md): Deprecated.
- [PBSetForkPositionAsync](1565887-pbsetforkpositionasync.md): Deprecated.
