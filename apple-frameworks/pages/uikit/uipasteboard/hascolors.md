> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/hascolors](https://developer.apple.com/documentation/uikit/uipasteboard/hascolors)

# hasColors (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.

## Declaration

```swift
var hasColors: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains color data.

Do not use the [color](color.md) or [colors](colors.md) properties to determine whether a pasteboard contains color data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.

# hasColors (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasColors;
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains color data.

Do not use the [color](color.md) or [colors](colors.md) properties to determine whether a pasteboard contains color data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasStrings](hasstrings.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.
