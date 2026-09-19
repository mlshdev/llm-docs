> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscachedimagerep/window

# window

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the window where the representation is cached.

## Declaration

```objectivec
- (NSWindow *) window;
```

<a id="return-value"></a>

## Return Value

The window (typically offscreen) used to store the image.

## See Also

### Getting Data

- [rect](rect.md): Deprecated. Returns the rectangle where the representation is cached.
