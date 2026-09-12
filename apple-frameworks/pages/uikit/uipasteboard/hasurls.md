> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/hasurls](https://developer.apple.com/documentation/uikit/uipasteboard/hasurls)

# hasURLs (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.

## Declaration

```swift
var hasURLs: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains URL data.

Do not use the [url](url.md) or [urls](urls.md) properties to determine whether a pasteboard contains URL data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.

# hasURLs (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasURLs;
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains URL data.

Do not use the [URL](url.md) or [URLs](urls.md) properties to determine whether a pasteboard contains URL data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.
