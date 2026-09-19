> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646506-hfs_getconverter

# hfs_getconverter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
int hfs_getconverter(u_int32_t encoding, hfs_to_unicode_func_t *get_unicode, unicode_to_hfs_func_t *get_hfsname);
```

## See Also

### Encodings

- [hfs_getencodingbias](1646508-hfs_getencodingbias.md)
- [hfs_pickencoding](1646509-hfs_pickencoding.md)
- [hfs_relconverter](1646505-hfs_relconverter.md)
- [hfs_setencodingbias](1646502-hfs_setencodingbias.md)
