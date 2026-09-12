> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/maximumdrawablecount](https://developer.apple.com/documentation/quartzcore/cametallayer/maximumdrawablecount)

# maximumDrawableCount (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+

The number of Metal drawables in the resource pool managed by Core Animation.

## Declaration

```swift
var maximumDrawableCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You can set this value to `2` or `3` only; if you pass a different value, Core Animation ignores the value and throws an exception.

The default value is `3`.

## See Also

### Obtaining a Metal Drawable

- [nextDrawable()](nextdrawable%28%29.md): Waits until a Metal drawable is available, and then returns it.
- [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.

# maximumDrawableCount (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+

The number of Metal drawables in the resource pool managed by Core Animation.

## Declaration

```objectivec
@property NSUInteger maximumDrawableCount;
```

<a id="Discussion"></a>

## Discussion

You can set this value to `2` or `3` only; if you pass a different value, Core Animation ignores the value and throws an exception.

The default value is `3`.

## See Also

### Obtaining a Metal Drawable

- [nextDrawable](nextdrawable%28%29.md): Waits until a Metal drawable is available, and then returns it.
- [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.
