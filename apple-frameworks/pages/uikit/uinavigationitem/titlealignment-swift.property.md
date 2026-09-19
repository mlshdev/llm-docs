> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/titlealignment-swift.property

# titleAlignment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta

The preferred alignment of the navigation bar’s title.

## Declaration

```swift
var titleAlignment: UINavigationItem.TitleAlignment { get set }
```

<a id="discussion"></a>

## Discussion

The navigation bar resolves the alignment of its title automatically based on context, and the navigation item’s style. Use this property to override the system default.

The alignment the bar actually used is reported by `UITraitCollection.navigationTitleAlignment`.

Defaults to `UINavigationItemTitleAlignmentAutomatic`.

# titleAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta

The preferred alignment of the navigation bar’s title.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UINavigationItemTitleAlignment titleAlignment;
```

<a id="discussion"></a>

## Discussion

The navigation bar resolves the alignment of its title automatically based on context, and the navigation item’s style. Use this property to override the system default.

The alignment the bar actually used is reported by `UITraitCollection.navigationTitleAlignment`.

Defaults to `UINavigationItemTitleAlignmentAutomatic`.
