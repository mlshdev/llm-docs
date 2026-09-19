> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/titlealignment-swift.enum/center

# UINavigationItem.TitleAlignment.center (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

The title is center-aligned.

## Declaration

```swift
case center
```

<a id="discussion"></a>

## Discussion

Unlike Automatic, this never falls back to leading alignment: a title that cannot be centered shifts toward the leading edge to clear the trailing bar content, and truncates only once it can shift no further.

# UINavigationItemTitleAlignmentCenter (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

The title is center-aligned.

## Declaration

```objectivec
UINavigationItemTitleAlignmentCenter
```

<a id="discussion"></a>

## Discussion

Unlike Automatic, this never falls back to leading alignment: a title that cannot be centered shifts toward the leading edge to clear the trailing bar content, and truncates only once it can shift no further.
