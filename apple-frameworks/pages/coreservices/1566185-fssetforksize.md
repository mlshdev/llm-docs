> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566185-fssetforksize](https://developer.apple.com/documentation/coreservices/1566185-fssetforksize)

# FSSetForkSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSSetForkSize(FSIORefNum forkRefNum, UInt16 positionMode, SInt64 positionOffset);
```

## See Also

### Manipulating File and Fork Size

- [FSGetForkSize](1565455-fsgetforksize.md): Deprecated.
- [PBGetForkSizeAsync](1565453-pbgetforksizeasync.md): Deprecated.
- [PBGetForkSizeSync](1566956-pbgetforksizesync.md): Deprecated.
- [PBSetForkSizeSync](1566944-pbsetforksizesync.md): Deprecated.
- [PBSetForkSizeAsync](1566552-pbsetforksizeasync.md): Deprecated.
