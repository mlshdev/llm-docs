> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-1n598/findobject(at:sourceimage:)](https://developer.apple.com/documentation/cinematic/cnobjecttracker-1n598/findobject(at:sourceimage:))

# findObject(at:sourceImage:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that finds the bounds of an object at the given point.

## Declaration

```swift
func findObject(at point: CGPoint, sourceImage: CVPixelBuffer) -> CNBoundsPrediction?
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
