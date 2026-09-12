> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzeimage(_:completionhandler:)](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzeimage(_:completionhandler:))

# analyzeImage(\_:completionHandler:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes an image for sensitive content and runs code on completion.

## Declaration

```swift
func analyzeImage(_ image: CGImage, completionHandler: @escaping @Sendable (SCSensitivityAnalysis?, (any Error)?) -> Void)
```

```swift
func analyzeImage(_ image: CGImage) async throws -> SCSensitivityAnalysis
```

## Parameters

- `image`: An image in memory.
- `completionHandler`: Code that your app provides for the system to run on completion.

## Mentioned In

- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)

<a id="discussion"></a>

## Discussion

The completion handler:

- Runs on an unspecified queue.
- Provides a `results` parameter that indicates if checked content contains nudity.

## See Also

### Analyzing images

- [analyzeImage(at:completionHandler:)](analyzeimage%28at_completionhandler_%29.md): Analyzes an image file on disk at a URL and runs code on completion.

# analyzeCGImage:completionHandler: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes an image for sensitive content and runs code on completion.

## Declaration

```objectivec
- (void) analyzeCGImage:(CGImageRef) image completionHandler:(void (^)(SCSensitivityAnalysis *results, NSError *error)) completionHandler;
```

## Parameters

- `image`: An image in memory.
- `completionHandler`: Code that your app provides for the system to run on completion.

## Mentioned In

- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)

<a id="discussion"></a>

## Discussion

The completion handler:

- Runs on an unspecified queue.
- Provides a `results` parameter that indicates if checked content contains nudity.

## See Also

### Analyzing images

- [analyzeImageFile:completionHandler:](analyzeimage%28at_completionhandler_%29.md): Analyzes an image file on disk at a URL and runs code on completion.
