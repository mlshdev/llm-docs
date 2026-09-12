> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1441071-copyinstr](https://developer.apple.com/documentation/kernel/1441071-copyinstr)

# copyinstr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
int copyinstr(const user_addr_t uaddr, void *kaddr, size_t len, size_t *done);
```

## See Also

### copyio

- [copyin](1441036-copyin.md)
- [copyout](1441088-copyout.md)
- [copyoutstr](1441047-copyoutstr.md)
- [copystr](1441079-copystr.md)
