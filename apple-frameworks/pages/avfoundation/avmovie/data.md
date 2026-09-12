> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/data](https://developer.apple.com/documentation/avfoundation/avmovie/data)

# data (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A data object that contains the movie file’s data.

## Declaration

```swift
var data: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if you didn’t initialize the movie with data.

## See Also

### Accessing movie information

- [url](url.md): A URL to a QuickTime or ISO base media file.

# data (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A data object that contains the movie file’s data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * data;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if you didn’t initialize the movie with data.

## See Also

### Accessing movie information

- [URL](url.md): A URL to a QuickTime or ISO base media file.
