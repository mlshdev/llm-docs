> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsportcoder/isbyref

# isByref

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a Boolean value that indicates whether the receiver is encoding an object by reference.

## Declaration

```objectivec
- (BOOL) isByref;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is encoding an object `byref`, [false](https://developer.apple.com/documentation/swift/false) if it expects a copy.

<a id="Discussion"></a>

## Discussion

See [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i) for more information.

## See Also

### Checking for Encoding

- [isBycopy](isbycopy.md): Deprecated. Returns a Boolean value that indicates whether the receiver is encoding an object by copying it.
