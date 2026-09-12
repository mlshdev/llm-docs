> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvmonogramcontentview](https://developer.apple.com/documentation/tvuikit/tvmonogramcontentview)

# TVMonogramContentView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A view that contains a circular image of a person or the person’s initials.

## Declaration

```swift
class TVMonogramContentView
```

<a id="overview"></a>

## Overview

The system provides a generic placeholder image if [image](tvmonogramcontentconfiguration-c.class/image.md) is `nil`. If [personNameComponents](tvmonogramcontentconfiguration-c.class/personnamecomponents.md) isn’t `nil`, the system creates a localized monogram image using the first initials from the name components.

![A darkened image with a highlighted box along the left side. The box contains a round image with an actor’s initials inside of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3801438@2x.png)

The following code illustrates how to update the configuration for a monogram:

```swift
override func updateConfiguration(using state: UICellConfigurationState) {
    var configuration = TVMonogramContentConfiguration().updatedConfiguration(for: state)

    configuration.image = avatarImage
    configuration.text = "Anne Johnson"
    configuration.secondaryText = "Actor"
    configuration.personNameComponents = nameComponents

    self.contentConfiguration = configuration
}
```

## Topics

### Creating a Monogram Content View

- [init(configuration:)](tvmonogramcontentview/init%28configuration_%29.md): Creates a monogram content view with the configuration you specify.
- [TVMonogramContentConfiguration](tvmonogramcontentconfiguration-swift.struct.md): A content configuration for a monogram view.

### Managing the Content Layout

- [focusedFrameGuide](tvmonogramcontentview/focusedframeguide.md): A guide for positioning other elements with the content view image’s focused frame.

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

- [TVMediaItemContentView](tvmediaitemcontentview.md): A view that represents media content, such as movies and TV shows.

# TVMonogramContentView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 15.0+

A view that contains a circular image of a person or the person’s initials.

## Declaration

```objectivec
@interface TVMonogramContentView : UIView
```

<a id="overview"></a>

## Overview

The system provides a generic placeholder image if [image](tvmonogramcontentconfiguration-c.class/image.md) is `nil`. If [personNameComponents](tvmonogramcontentconfiguration-c.class/personnamecomponents.md) isn’t `nil`, the system creates a localized monogram image using the first initials from the name components.

![A darkened image with a highlighted box along the left side. The box contains a round image with an actor’s initials inside of it.](https://developer.apple.com/images/com.apple.tvuikit/media-3801438@2x.png)

The following code illustrates how to update the configuration for a monogram:

```swift
override func updateConfiguration(using state: UICellConfigurationState) {
    var configuration = TVMonogramContentConfiguration().updatedConfiguration(for: state)

    configuration.image = avatarImage
    configuration.text = "Anne Johnson"
    configuration.secondaryText = "Actor"
    configuration.personNameComponents = nameComponents

    self.contentConfiguration = configuration
}
```

## Topics

### Creating a Monogram Content View

- [initWithConfiguration:](tvmonogramcontentview/initwithconfiguration_.md): Creates a monogram content view with the configuration you specify.
- [TVMonogramContentConfiguration](tvmonogramcontentconfiguration-c.class.md): A content configuration for a monogram view.

### Managing the Content Configuration

- [configuration](tvmonogramcontentview/configuration.md): The current configuration of the view.

### Managing the Content Layout

- [focusedFrameGuide](tvmonogramcontentview/focusedframeguide.md): A guide for positioning other elements with the content view image’s focused frame.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [UIContentView](../uikit/uicontentview-3zu2k.md)

## See Also

### Content views

- [TVMediaItemContentView](tvmediaitemcontentview.md): A view that represents media content, such as movies and TV shows.
