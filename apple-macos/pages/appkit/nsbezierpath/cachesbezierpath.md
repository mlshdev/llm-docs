> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/cachesbezierpath](https://developer.apple.com/documentation/appkit/nsbezierpath/cachesbezierpath)

# cachesBezierPath

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.0)

Returns a Boolean value that indicates whether this object maintains a cached image of its path.

## Declaration

```objectivec
- (BOOL) cachesBezierPath;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the path maintains a cached image; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Caching of paths currently has no effect, so method always returns NO.

## See Also

### Caching a Path

- [setCachesBezierPath:](setcachesbezierpath_.md): Deprecated. Sets whether the path should cache its path information.
