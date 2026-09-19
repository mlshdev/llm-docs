> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565455-fsgetforksize

# FSGetForkSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSGetForkSize(FSIORefNum forkRefNum, SInt64 *forkSize);
```

## See Also

### Manipulating File and Fork Size

- [PBGetForkSizeAsync](1565453-pbgetforksizeasync.md): Deprecated.
- [PBGetForkSizeSync](1566956-pbgetforksizesync.md): Deprecated.
- [FSSetForkSize](1566185-fssetforksize.md): Deprecated.
- [PBSetForkSizeSync](1566944-pbsetforksizesync.md): Deprecated.
- [PBSetForkSizeAsync](1566552-pbsetforksizeasync.md): Deprecated.
