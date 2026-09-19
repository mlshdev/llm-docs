> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest/supportedoutputpixelformats()

# supportedOutputPixelFormats() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a list of output pixel formats that the request supports.

## Declaration

```swift
func supportedOutputPixelFormats() throws -> [NSNumber]
```

# supportedOutputPixelFormatsAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a list of output pixel formats that the request supports.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) supportedOutputPixelFormatsAndReturnError:(NSError **) error;
```
