> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1473458-wkdm_compress_new

# WKdm_compress_new

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int WKdm_compress_new(const WK_word *src_buf, WK_word *dest_buf, WK_word *scratch, unsigned int limit);
```

## See Also

### Compression

- [WKdm_decompress_new](1473454-wkdm_decompress_new.md)
