> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/setcachesbezierpath:](https://developer.apple.com/documentation/appkit/nsbezierpath/setcachesbezierpath:)

# setCachesBezierPath:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.0)

Sets whether the path should cache its path information.

## Declaration

```objectivec
- (void) setCachesBezierPath:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver should cache its path information; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Caching of paths currently has no effect.

## See Also

### Caching a Path

- [cachesBezierPath](cachesbezierpath.md): Deprecated. Returns a Boolean value that indicates whether this object maintains a cached image of its path.
