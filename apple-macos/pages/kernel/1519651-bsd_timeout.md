> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1519651-bsd_timeout

# bsd_timeout

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
void bsd_timeout(void (*)(void *), void *arg, struct timespec *ts);
```

## See Also

### General

- [bsd_untimeout](1519608-bsd_untimeout.md)
