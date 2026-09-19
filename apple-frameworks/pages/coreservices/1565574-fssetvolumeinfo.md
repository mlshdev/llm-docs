> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565574-fssetvolumeinfo

# FSSetVolumeInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSSetVolumeInfo(FSVolumeRefNum volume, FSVolumeInfoBitmap whichInfo, const FSVolumeInfo *info);
```

## See Also

### Getting and Setting Volume Information

- [FSGetVolumeInfo](1566350-fsgetvolumeinfo.md): Deprecated.
- [PBGetVolumeInfoAsync](1565244-pbgetvolumeinfoasync.md): Deprecated.
- [PBGetVolumeInfoSync](1566892-pbgetvolumeinfosync.md): Deprecated.
- [PBSetVolumeInfoAsync](1566541-pbsetvolumeinfoasync.md): Deprecated.
- [PBSetVolumeInfoSync](1566427-pbsetvolumeinfosync.md): Deprecated.
