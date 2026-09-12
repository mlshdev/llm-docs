> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinputstream/inputstreamwithurl:](https://developer.apple.com/documentation/foundation/nsinputstream/inputstreamwithurl:)

# inputStreamWithURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized `NSInputStream` object that reads data from the file at a given URL.

## Declaration

```objectivec
+ (instancetype) inputStreamWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to the file.

<a id="discussion"></a>

## Discussion

The stream must be opened before it can be used.
