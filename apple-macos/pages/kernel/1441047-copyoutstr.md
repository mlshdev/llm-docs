> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1441047-copyoutstr

# copyoutstr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
int copyoutstr(const void *kaddr, user_addr_t udaddr, size_t len, size_t *done);
```

## See Also

### copyio

- [copyin](1441036-copyin.md)
- [copyinstr](1441071-copyinstr.md)
- [copyout](1441088-copyout.md)
- [copystr](1441079-copystr.md)
