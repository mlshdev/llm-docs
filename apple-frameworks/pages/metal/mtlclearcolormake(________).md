> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlclearcolormake(_:_:_:_:)](https://developer.apple.com/documentation/metal/mtlclearcolormake(_:_:_:_:))

# MTLClearColorMake(\_:\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a color value used to clear a color attachment.

## Declaration

```swift
func MTLClearColorMake(_ red: Double, _ green: Double, _ blue: Double, _ alpha: Double) -> MTLClearColor
```

## Parameters

- `red`: The red color channel.
- `green`: The green color channel.
- `blue`: The blue color channel.
- `alpha`: The alpha channel.

<a id="return-value"></a>

## Return Value

A value for clearing a color attachment.

## See Also

### Specifying clearing value

- [clearColor](mtlrenderpasscolorattachmentdescriptor/clearcolor.md): The color to use when clearing the color attachment.

# MTLClearColorMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a color value used to clear a color attachment.

## Declaration

```objectivec
static MTLClearColor MTLClearColorMake(double red, double green, double blue, double alpha);
```

## Parameters

- `red`: The red color channel.
- `green`: The green color channel.
- `blue`: The blue color channel.
- `alpha`: The alpha channel.

<a id="return-value"></a>

## Return Value

A value for clearing a color attachment.

## See Also

### Specifying clearing value

- [clearColor](mtlrenderpasscolorattachmentdescriptor/clearcolor.md): The color to use when clearing the color attachment.
