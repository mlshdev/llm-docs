> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkretain](https://developer.apple.com/documentation/corevideo/cvdisplaylinkretain)

# CVDisplayLinkRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Retains a display link.

## Declaration

```objectivec
extern CVDisplayLinkRefCVDisplayLinkRetain(CVDisplayLinkRef displayLink);
```

## Parameters

- `displayLink`: The display link to be retained. This function is `NULL`-safe.

<a id="return-value"></a>

## Return Value

For convenience, this function returns the retained display link if successful.

## See Also

### Retaining and Releasing Display Links

- [CVDisplayLinkRelease](cvdisplaylinkrelease.md): Deprecated. Releases a display link.
