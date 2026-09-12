> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscachedimagerep/rect](https://developer.apple.com/documentation/appkit/nscachedimagerep/rect)

# rect

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the rectangle where the representation is cached.

## Declaration

```objectivec
- (NSRect) rect;
```

<a id="return-value"></a>

## Return Value

The rectangle in the associated offscreen window where the receiver’s image is located.

## See Also

### Related Documentation

- [size](../nsimagerep/size.md): The size of the image representation, measured in points in the user coordinate space.

### Getting Data

- [window](window.md): Deprecated. Returns the window where the representation is cached.
