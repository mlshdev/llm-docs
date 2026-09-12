> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/setobjectzone:](https://developer.apple.com/documentation/foundation/nsunarchiver/setobjectzone:)

# setObjectZone:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Sets the memory zone used to allocate decoded objects.

## Declaration

```objectivec
- (void) setObjectZone:(NSZone *) zone;
```

## Parameters

- `zone`: The memory zone used to allocate decoded objects.

<a id="Discussion"></a>

## Discussion

If `zone` is `nil`, or if this method is never invoked, the default zone is used, as given by `NSDefaultMallocZone()`.

## See Also

### Managing an NSUnarchiver

- [atEnd](isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.
- [objectZone](objectzone-c.method.md): Deprecated. Returns the memory zone used to allocate decoded objects.
- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.
