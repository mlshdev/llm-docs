> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/allowsnextdrawabletimeout](https://developer.apple.com/documentation/quartzcore/cametallayer/allowsnextdrawabletimeout)

# allowsNextDrawableTimeout (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.

## Declaration

```swift
var allowsNextDrawableTimeout: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the [nextDrawable()](nextdrawable%28%29.md) method returns [nil](../../objectivec/nil-227m0.md) if it can’t provide a drawable object within one second. If [false](https://developer.apple.com/documentation/swift/false), the [nextDrawable()](nextdrawable%28%29.md) method waits indefinitely for a drawable to become available.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Obtaining a Metal Drawable

- [nextDrawable()](nextdrawable%28%29.md): Waits until a Metal drawable is available, and then returns it.
- [maximumDrawableCount](maximumdrawablecount.md): The number of Metal drawables in the resource pool managed by Core Animation.

# allowsNextDrawableTimeout (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.

## Declaration

```objectivec
@property BOOL allowsNextDrawableTimeout;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the [nextDrawable](nextdrawable%28%29.md) method returns [nil](../../objectivec/nil-227m0.md) if it can’t provide a drawable object within one second. If [false](https://developer.apple.com/documentation/swift/false), the [nextDrawable](nextdrawable%28%29.md) method waits indefinitely for a drawable to become available.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Obtaining a Metal Drawable

- [nextDrawable](nextdrawable%28%29.md): Waits until a Metal drawable is available, and then returns it.
- [maximumDrawableCount](maximumdrawablecount.md): The number of Metal drawables in the resource pool managed by Core Animation.
