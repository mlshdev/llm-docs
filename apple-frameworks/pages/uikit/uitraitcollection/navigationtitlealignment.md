> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitcollection/navigationtitlealignment

# navigationTitleAlignment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

The alignment the navigation bar resolved for its title.

## Declaration

```swift
var navigationTitleAlignment: UINavigationItem.TitleAlignment { get }
```

<a id="discussion"></a>

## Discussion

When the system has resolved an alignment for the title, this reports that concrete alignment, Leading or Center, even when the client has not set a preference. Otherwise it reports Automatic.

# navigationTitleAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

The alignment the navigation bar resolved for its title.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UINavigationItemTitleAlignment navigationTitleAlignment;
```

<a id="discussion"></a>

## Discussion

When the system has resolved an alignment for the title, this reports that concrete alignment, Leading or Center, even when the client has not set a preference. Otherwise it reports Automatic.
