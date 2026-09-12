> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566350-fsgetvolumeinfo](https://developer.apple.com/documentation/coreservices/1566350-fsgetvolumeinfo)

# FSGetVolumeInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSGetVolumeInfo(FSVolumeRefNum volume, ItemCount volumeIndex, FSVolumeRefNum *actualVolume, FSVolumeInfoBitmap whichInfo, FSVolumeInfo *info, HFSUniStr255 *volumeName, FSRef *rootDirectory);
```

## See Also

### Getting and Setting Volume Information

- [FSSetVolumeInfo](1565574-fssetvolumeinfo.md): Deprecated.
- [PBGetVolumeInfoAsync](1565244-pbgetvolumeinfoasync.md): Deprecated.
- [PBGetVolumeInfoSync](1566892-pbgetvolumeinfosync.md): Deprecated.
- [PBSetVolumeInfoAsync](1566541-pbsetvolumeinfoasync.md): Deprecated.
- [PBSetVolumeInfoSync](1566427-pbsetvolumeinfosync.md): Deprecated.
