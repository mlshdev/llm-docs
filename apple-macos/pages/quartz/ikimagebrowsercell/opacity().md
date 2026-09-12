> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/opacity()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/opacity())

# opacity() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the opacity of the receiver.

## Declaration

```swift
func opacity() -> CGFloat
```

<a id="return-value"></a>

## Return Value

The cell’s opacity.

<a id="Discussion"></a>

## Discussion

Possible values are between 0.0 (transparent) and 1.0 (opaque).

Subclasses can override this method to customize the opacity of the cell.

## See Also

### Cell Content Display

- [imageAlignment()](imagealignment%28%29.md): Returns the position of the cell’s image in the frame.

# opacity (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the opacity of the receiver.

## Declaration

```objectivec
- (CGFloat) opacity;
```

<a id="return-value"></a>

## Return Value

The cell’s opacity.

<a id="Discussion"></a>

## Discussion

Possible values are between 0.0 (transparent) and 1.0 (opaque).

Subclasses can override this method to customize the opacity of the cell.

## See Also

### Cell Content Display

- [imageAlignment](imagealignment%28%29.md): Returns the position of the cell’s image in the frame.
