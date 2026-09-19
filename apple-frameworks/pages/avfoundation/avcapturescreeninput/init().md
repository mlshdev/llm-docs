> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/init()

# init() (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Initializes a capture screen input that provides media data from the main screen.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

Using this initializer is equivalent to calling [init(displayID:)](init%28displayid_%29.md) with the result of the [CGMainDisplayID()](../../coregraphics/cgmaindisplayid%28%29.md) function.

## See Also

### Initializing a capture screen input

- [init(displayID:)](init%28displayid_%29.md): Initializes a capture screen input that provides media data from the specified display.

# init (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Initializes a capture screen input that provides media data from the main screen.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

Using this initializer is equivalent to calling [initWithDisplayID:](init%28displayid_%29.md) with the result of the [CGMainDisplayID](../../coregraphics/cgmaindisplayid%28%29.md) function.

## See Also

### Initializing a capture screen input

- [initWithDisplayID:](init%28displayid_%29.md): Initializes a capture screen input that provides media data from the specified display.
- [new](new.md): Creates a capture screen input that provides media data from the main screen.
