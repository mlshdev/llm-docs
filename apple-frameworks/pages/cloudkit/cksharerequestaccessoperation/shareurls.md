> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/shareurls

# shareURLs (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The URLs of the shares to request access to.

## Declaration

```swift
var shareURLs: [URL]? { get set }
```

<a id="discussion"></a>

## Discussion

Include multiple URLs to request access to multiple shares simultaneously. The server processes each URL independently.

# shareURLs (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The URLs of the shares to request access to.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSURL *> * shareURLs;
```

<a id="discussion"></a>

## Discussion

Include multiple URLs to request access to multiple shares simultaneously. The server processes each URL independently.
