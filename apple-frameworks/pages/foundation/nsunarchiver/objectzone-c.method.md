> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsunarchiver/objectzone-c.method

# objectZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the memory zone used to allocate decoded objects.

## Declaration

```objectivec
- (NSZone *) objectZone;
```

<a id="return-value"></a>

## Return Value

The memory zone used to allocate decoded objects.

## See Also

### Managing an NSUnarchiver

- [atEnd](isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.
- [setObjectZone:](setobjectzone_.md): Deprecated. Sets the memory zone used to allocate decoded objects.
- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.
