> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzeimage(at:completionhandler:)](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/analyzeimage(at:completionhandler:))

# analyzeImage(at:completionHandler:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes an image file on disk at a URL and runs code on completion.

## Declaration

```swift
func analyzeImage(at fileURL: URL, completionHandler: @escaping @Sendable (SCSensitivityAnalysis?, (any Error)?) -> Void)
```

```swift
func analyzeImage(at fileURL: URL) async throws -> SCSensitivityAnalysis
```

## Parameters

- `fileURL`: The URL for an image file on disk.
- `completionHandler`: Code that your app provides for the system to run on completion.

<a id="discussion"></a>

## Discussion

The completion handler:

- Runs on an unspecified queue.
- Provides a `results` parameter that indicates if checked content contains nudity.

## See Also

### Analyzing images

- [analyzeImage(\_:completionHandler:)](analyzeimage%28__completionhandler_%29.md): Analyzes an image for sensitive content and runs code on completion.

# analyzeImageFile:completionHandler: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Analyzes an image file on disk at a URL and runs code on completion.

## Declaration

```objectivec
- (void) analyzeImageFile:(NSURL *) fileURL completionHandler:(void (^)(SCSensitivityAnalysis *results, NSError *error)) completionHandler;
```

## Parameters

- `fileURL`: The URL for an image file on disk.
- `completionHandler`: Code that your app provides for the system to run on completion.

<a id="discussion"></a>

## Discussion

The completion handler:

- Runs on an unspecified queue.
- Provides a `results` parameter that indicates if checked content contains nudity.

## See Also

### Analyzing images

- [analyzeCGImage:completionHandler:](analyzeimage%28__completionhandler_%29.md): Analyzes an image for sensitive content and runs code on completion.
