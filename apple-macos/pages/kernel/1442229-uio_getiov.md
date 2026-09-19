> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1442229-uio_getiov

# uio_getiov

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
int uio_getiov(uio_t a_uio, int a_index, user_addr_t *a_baseaddr_p, user_size_t *a_length_p);
```
