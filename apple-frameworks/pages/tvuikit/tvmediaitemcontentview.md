> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmediaitemcontentview](https://developer.apple.com/documentation/tvuikit/tvmediaitemcontentview)

# TVMediaItemContentView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A view that represents media content, such as movies and TV shows.

## Declaration

```swift
class TVMediaItemContentView
```

<a id="overview"></a>

## Overview

The following code illustrates how to update the configuration for a wide media item:

```swift
override func updateConfiguration(using state: UICellConfigurationState) {
    var configuration = TVMediaItemContentConfiguration.wideCell().updatedConfiguration(for: state)

    configuration.image = coverArtImage
    configuration.text = // The title of the media content.
    configuration.secondaryText = "S1, E1"
    configuration.playbackProgress = 0.4
    configuration.badgeText = "Live"
    configuration.badgeProperties = TVMediaItemContentConfiguration.BadgeProperties.liveContent()

    self.contentConfiguration = configuration
}
```

## Topics

### Creating a Media Item Content View

- [init(configuration:)](tvmediaitemcontentview/init%28configuration_%29.md): Creates a media item content view with the configuration you specify.
- [TVMediaItemContentConfiguration](tvmediaitemcontentconfiguration-swift.struct.md): A content configuration for a media item view.

### Managing the Content Layout

- [focusedFrameGuide](tvmediaitemcontentview/focusedframeguide.md): A guide for positioning other elements with the content view image’s focused frame.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentView](../uikit/uicontentview-5fh3z.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Content views

- [TVMonogramContentView](tvmonogramcontentview.md): A view that contains a circular image of a person or the person’s initials.

# TVMediaItemContentView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A view that represents media content, such as movies and TV shows.

## Declaration

```objectivec
@interface TVMediaItemContentView : UIView
```

<a id="overview"></a>

## Overview

The following code illustrates how to update the configuration for a wide media item:

```swift
override func updateConfiguration(using state: UICellConfigurationState) {
    var configuration = TVMediaItemContentConfiguration.wideCell().updatedConfiguration(for: state)

    configuration.image = coverArtImage
    configuration.text = // The title of the media content.
    configuration.secondaryText = "S1, E1"
    configuration.playbackProgress = 0.4
    configuration.badgeText = "Live"
    configuration.badgeProperties = TVMediaItemContentConfiguration.BadgeProperties.liveContent()

    self.contentConfiguration = configuration
}
```

## Topics

### Creating a Media Item Content View

- [initWithConfiguration:](tvmediaitemcontentview/initwithconfiguration_.md): Creates a media item content view with the configuration you specify.
- [TVMediaItemContentConfiguration](tvmediaitemcontentconfiguration-c.class.md): A content configuration for a media item view.

### Managing the Content Configuration

- [configuration](tvmediaitemcontentview/configuration.md): The current configuration of the view.

### Managing the Content Layout

- [focusedFrameGuide](tvmediaitemcontentview/focusedframeguide.md): A guide for positioning other elements with the content view image’s focused frame.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [UIContentView](../uikit/uicontentview-3zu2k.md)

## See Also

### Content views

- [TVMonogramContentView](tvmonogramcontentview.md): A view that contains a circular image of a person or the person’s initials.
