> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/hasstrings](https://developer.apple.com/documentation/uikit/uipasteboard/hasstrings)

# hasStrings (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.

## Declaration

```swift
var hasStrings: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains string data.

Do not use the [string](string.md) or [strings](strings.md) properties to determine whether a pasteboard contains string data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.

# hasStrings (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the pasteboard contains a nonempty array of strings.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasStrings;
```

<a id="Discussion"></a>

## Discussion

Employ this property to determine if a pasteboard contains string data.

Do not use the [string](string.md) or [strings](strings.md) properties to determine whether a pasteboard contains string data, because doing so consumes resources needlessly.

## See Also

### Checking for data types on a pasteboard

- [hasColors](hascolors.md): A Boolean value that indicates whether the pasteboard contains contains a nonempty array of colors.
- [hasImages](hasimages.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of images.
- [hasURLs](hasurls.md): A Boolean value that indicates whether the pasteboard contains a nonempty array of URLs.
