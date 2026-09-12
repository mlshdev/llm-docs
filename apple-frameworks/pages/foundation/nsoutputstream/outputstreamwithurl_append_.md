> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsoutputstream/outputstreamwithurl:append:](https://developer.apple.com/documentation/foundation/nsoutputstream/outputstreamwithurl:append:)

# outputStreamWithURL:append:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized output stream for writing to a specified URL.

## Declaration

```objectivec
+ (instancetype) outputStreamWithURL:(NSURL *) url append:(BOOL) shouldAppend;
```

## Parameters

- `url`: The URL to the file the output stream will write to.
- `shouldAppend`: `YES` if newly written data should be appended to any existing file contents, otherwise `NO`.

<a id="discussion"></a>

## Discussion

The stream must be opened before it can be used.
