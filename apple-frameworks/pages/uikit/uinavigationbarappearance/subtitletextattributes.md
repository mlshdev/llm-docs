> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationbarappearance/subtitletextattributes

# subtitleTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The default text attributes to apply to the subtitle rendered in the navigation bar.

## Declaration

```swift
var subtitleTextAttributes: [NSAttributedString.Key : Any] { get set }
```

## See Also

### Configuring the subtitle

- [largeSubtitleTextAttributes](largesubtitletextattributes.md): The default text attributes to apply to the subtitle when it’s rendered under the large title.

# subtitleTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The default text attributes to apply to the subtitle rendered in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * subtitleTextAttributes;
```

## See Also

### Configuring the subtitle

- [largeSubtitleTextAttributes](largesubtitletextattributes.md): The default text attributes to apply to the subtitle when it’s rendered under the large title.
