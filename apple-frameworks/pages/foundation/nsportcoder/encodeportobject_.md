> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportcoder/encodeportobject:](https://developer.apple.com/documentation/foundation/nsportcoder/encodeportobject:)

# encodePortObject:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Encodes a given port so it can be properly reconstituted in the receiving process or thread.

## Declaration

```objectivec
- (void) encodePortObject:(NSPort *) aport;
```

## Parameters

- `aport`: The port to encode.

<a id="Discussion"></a>

## Discussion

This method is primarily for use by `NSPort` objects themselves—you can always use the general `encode...Object:` methods to encode any object.

`NSPort` invokes this method in its [encodeWithCoder:](../nscoding/encode%28with_%29.md) method so that the appropriate kernel information for the port can be encoded. A subclass of `NSPortCoder` should not encode an `NSPort` by sending it an [encodeWithCoder:](../nscoding/encode%28with_%29.md) message. See [Subclassing NSCoder](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/subclassing.html#//apple_ref/doc/uid/20000951) for more information.

## See Also

### Encoding NSPort Objects

- [decodePortObject](decodeportobject.md): Deprecated. Decodes and returns an `NSPort` object that was previously encoded with any of the general `encode...Object:` messages.
