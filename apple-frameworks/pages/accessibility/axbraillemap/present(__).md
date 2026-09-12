> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap/present(_:)](https://developer.apple.com/documentation/accessibility/axbraillemap/present(_:))

# present(\_:) (Swift)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Converts the data from the image you specify into the braille map.

## Declaration

```swift
func present(_ image: CGImage)
```

## Parameters

- `image`: An image to convert into the braille map.

<a id="discussion"></a>

## Discussion

Use this method to convert image data into the braille map directly, without the need to modify the heights of individual pins using [setHeight(\_:at:)](setheight%28__at_%29.md).

# presentImage: (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Converts the data from the image you specify into the braille map.

## Declaration

```objectivec
- (void) presentImage:(CGImageRef) image;
```

## Parameters

- `image`: An image to convert into the braille map.

<a id="discussion"></a>

## Discussion

Use this method to convert image data into the braille map directly, without the need to modify the heights of individual pins using [setHeight:atPoint:](setheight%28__at_%29.md).
