> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharerequestaccessoperation/shareurls](https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/shareurls)

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
