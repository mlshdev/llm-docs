> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646509-hfs_pickencoding

# hfs_pickencoding

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
u_int32_t hfs_pickencoding(const u_int16_t *src, int len);
```

## See Also

### Encodings

- [hfs_getconverter](1646506-hfs_getconverter.md)
- [hfs_getencodingbias](1646508-hfs_getencodingbias.md)
- [hfs_relconverter](1646505-hfs_relconverter.md)
- [hfs_setencodingbias](1646502-hfs_setencodingbias.md)
