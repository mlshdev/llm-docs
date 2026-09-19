> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565345-fsgetforkcbinfo

# FSGetForkCBInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSGetForkCBInfo(FSIORefNum desiredRefNum, FSVolumeRefNum volume, short *iterator, FSIORefNum *actualRefNum, FSForkInfo *forkInfo, FSRef *ref, HFSUniStr255 *outForkName);
```

## See Also

### Obtaining Fork Control Block Information

- [PBGetForkCBInfoSync](1566258-pbgetforkcbinfosync.md): Deprecated.
- [PBGetForkCBInfoAsync](1566027-pbgetforkcbinfoasync.md): Deprecated.
