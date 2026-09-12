> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-7aliq/findobjectatpoint:sourceimage:](https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/findobjectatpoint:sourceimage:)

# findObjectAtPoint:sourceImage:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Finds the bounds of an object at the given point.

## Declaration

```objectivec
- (CNBoundsPrediction *) findObjectAtPoint:(CGPoint) point sourceImage:(CVPixelBufferRef) sourceImage;
```

## Parameters

- `point`: The point of interest.
- `sourceImage`: The image buffer containing the image.

<a id="return-value"></a>

## Return Value

A prediction, which includes bounds that can be used to start tracking, or \`nil\` if no discernible object is detected.

<a id="Discussion"></a>

## Discussion

Used to convert a normalized point in an image to a rectangle used to start tracking.
