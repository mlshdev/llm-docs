> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkrelease](https://developer.apple.com/documentation/corevideo/cvdisplaylinkrelease)

# CVDisplayLinkRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Releases a display link.

## Declaration

```objectivec
extern void CVDisplayLinkRelease(CVDisplayLinkRef displayLink);
```

## Parameters

- `displayLink`: The display link to release. This function is `NULL`-safe.

## See Also

### Retaining and Releasing Display Links

- [CVDisplayLinkRetain](cvdisplaylinkretain.md): Deprecated. Retains a display link.
