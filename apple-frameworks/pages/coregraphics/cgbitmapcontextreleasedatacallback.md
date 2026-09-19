> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgbitmapcontextreleasedatacallback

# CGBitmapContextReleaseDataCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function used to release data associate with the bitmap context.

## Declaration

```swift
typealias CGBitmapContextReleaseDataCallback = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -> Void
```

<a id="Discussion"></a>

## Discussion

The `releaseInfo` parameter contains the contextual data that you passed to the `CGContext/init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:)` function. The `data` parameter contains a pointer to the bitmap data for you to release.

# CGBitmapContextReleaseDataCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function used to release data associate with the bitmap context.

## Declaration

```objectivec
typedef void (*)(void *, void *) CGBitmapContextReleaseDataCallback;
```

<a id="Discussion"></a>

## Discussion

The `releaseInfo` parameter contains the contextual data that you passed to the `CGContext/init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:)` function. The `data` parameter contains a pointer to the bitmap data for you to release.
