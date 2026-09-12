> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/url](https://developer.apple.com/documentation/avfoundation/avmovie/url)

# url (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A URL to a QuickTime or ISO base media file.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if you didn’t initialize the movie with a URL.

## See Also

### Accessing movie information

- [data](data.md): A data object that contains the movie file’s data.

# URL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A URL to a QuickTime or ISO base media file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The value is `nil` if you didn’t initialize the movie with a URL.

## See Also

### Accessing movie information

- [data](data.md): A data object that contains the movie file’s data.
