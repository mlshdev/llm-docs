> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblendkernel/apply(foreground:background:)](https://developer.apple.com/documentation/coreimage/ciblendkernel/apply(foreground:background:))

# apply(foreground:background:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new image using the blend kernel and specified foreground and background images.

## Declaration

```swift
func apply(foreground: CIImage, background: CIImage) -> CIImage?
```

## Parameters

- `foreground`: The first input image to be blended
- `background`: The second input image to be blended

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) blending the foreground and background images.  Its extent will be the union of the foreground and background image extents.

<a id="Discussion"></a>

## Discussion

The foreground and background images are not treated differently in the blending.  You can think of them as equivalents A and B; the foreground is not given any precedence over the background.

# applyWithForeground:background: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new image using the blend kernel and specified foreground and background images.

## Declaration

```objectivec
- (CIImage *) applyWithForeground:(CIImage *) foreground background:(CIImage *) background;
```

## Parameters

- `foreground`: The first input image to be blended
- `background`: The second input image to be blended

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) blending the foreground and background images.  Its extent will be the union of the foreground and background image extents.

<a id="Discussion"></a>

## Discussion

The foreground and background images are not treated differently in the blending.  You can think of them as equivalents A and B; the foreground is not given any precedence over the background.
