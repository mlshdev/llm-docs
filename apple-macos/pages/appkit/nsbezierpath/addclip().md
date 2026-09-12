> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/addclip()](https://developer.apple.com/documentation/appkit/nsbezierpath/addclip())

# addClip() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

## Declaration

```swift
func addClip()
```

<a id="Discussion"></a>

## Discussion

This method uses the current winding rule to determine the clipping shape of the receiver. This method does not affect the receiver’s path.

## See Also

### Specifying a Clipping Path

- [setClip()](setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.
- [clip(\_:)](clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

# addClip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

## Declaration

```objectivec
- (void) addClip;
```

<a id="Discussion"></a>

## Discussion

This method uses the current winding rule to determine the clipping shape of the receiver. This method does not affect the receiver’s path.

## See Also

### Specifying a Clipping Path

- [setClip](setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.
- [clipRect:](clip%28__%29.md): Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
