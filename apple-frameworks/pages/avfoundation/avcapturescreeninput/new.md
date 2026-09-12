> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/new](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/new)

# new

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a capture screen input that provides media data from the main screen.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

Using this method is equivalent to calling [initWithDisplayID:](init%28displayid_%29.md) with the result of the [CGMainDisplayID](../../coregraphics/cgmaindisplayid%28%29.md) function.

## See Also

### Initializing a capture screen input

- [initWithDisplayID:](init%28displayid_%29.md): Initializes a capture screen input that provides media data from the specified display.
- [init](init%28%29.md): Initializes a capture screen input that provides media data from the main screen.
