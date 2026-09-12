> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportcoder/decodeportobject](https://developer.apple.com/documentation/foundation/nsportcoder/decodeportobject)

# decodePortObject

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Decodes and returns an `NSPort` object that was previously encoded with any of the general `encode...Object:` messages.

## Declaration

```objectivec
- (NSPort *) decodePortObject;
```

<a id="return-value"></a>

## Return Value

An `NSPort` object that was previously encoded with any of the general `encode...Object:` messages.

<a id="Discussion"></a>

## Discussion

This method is primarily for use by `NSPort` objects themselves—you can always use [decodeObject](../nscoder/decodeobject%28%29.md) to decode any object.

`NSPort` invokes this method in its [initWithCoder:](../nscoding/init%28coder_%29.md) method so the appropriate kernel information for the port can be decoded. A subclass of `NSPortCoder` shouldn’t decode an `NSPort` by sending it an [initWithCoder:](../nscoding/init%28coder_%29.md) message. See [Subclassing NSCoder](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/subclassing.html#//apple_ref/doc/uid/20000951) for more information.

## See Also

### Encoding NSPort Objects

- [encodePortObject:](encodeportobject_.md): Deprecated. Encodes a given port so it can be properly reconstituted in the receiving process or thread.
