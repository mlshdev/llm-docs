> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/hasimages](https://developer.apple.com/documentation/uikit/uipasteboard/hasimages)

# hasImages (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of images.

## Declaration

```swift
var hasImages: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains image data.

Do not use the [image](image.md) or [images](images.md) properties to determine whether a pasteboard contains image data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.

# hasImages (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of images.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasImages;
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains image data.

Do not use the [image](image.md) or [images](images.md) properties to determine whether a pasteboard contains image data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.
