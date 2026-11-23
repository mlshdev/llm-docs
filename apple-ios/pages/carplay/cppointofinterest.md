> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppointofinterest

# CPPointOfInterest (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes a point of interest on the template’s map and in its scrollable picker.

## Declaration

```swift
class CPPointOfInterest
```

<a id="overview"></a>

## Overview

A point of interest describes a geographical location on a map. It also provides supplementary information about the location, such as a title and summary that the template displays in a scrollable picker and on a detail card. A point of interest also provides the buttons the detail card presents to the user as contextual actions.

You provide an array of `CPPointOfInterest` objects when initializing [CPPointOfInterestTemplate](cppointofinteresttemplate.md), or whenever the visible region of the template’s map changes, by calling the template’s [setPointsOfInterest(\_:selectedIndex:)](cppointofinteresttemplate/setpointsofinterest%28__selectedindex_%29.md) method.

`CPPointOfInterestTemplate` displays a maximum of twelve points of interest.

## Topics

### Creating a point of interest

- [init(location:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:)](cppointofinterest/init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_%29.md): Creates a point of interest for a specific location.
- [init(location:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:selectedPinImage:)](cppointofinterest/init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_selectedpinimage_%29.md)
- [init(coder:)](cppointofinterest/init%28coder_%29.md)
- [pinImageSize](cppointofinterest/pinimagesize.md)
- [selectedPinImageSize](cppointofinterest/selectedpinimagesize.md)

### Managing the map annotation

- [location](cppointofinterest/location.md): The map item that contains the point of interest’s geographical information.
- [pinImage](cppointofinterest/pinimage.md): A custom image that the map annotation displays.

### Managing the picker item

- [title](cppointofinterest/title.md): The title that the picker’s item displays.
- [subtitle](cppointofinterest/subtitle.md): The subtitle that the picker’s item displays.
- [summary](cppointofinterest/summary.md): The summary that the picker’s item displays.

### Managing the detail card

- [detailTitle](cppointofinterest/detailtitle.md): The detail card’s title.
- [detailSubtitle](cppointofinterest/detailsubtitle.md): The detail card’s subtitle.
- [detailSummary](cppointofinterest/detailsummary.md): The detail card’s summary.

### Managing the pin image

- [selectedPinImage](cppointofinterest/selectedpinimage.md)

### Managing the buttons

- [primaryButton](cppointofinterest/primarybutton.md): The detail card’s primary action button.
- [secondaryButton](cppointofinterest/secondarybutton.md): The detail card’s secondary action button.

### Providing app-specific content

- [userInfo](cppointofinterest/userinfo.md): An opaque value for the point of interest.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a point of interest template

- [init(title:pointsOfInterest:selectedIndex:)](cppointofinteresttemplate/init%28title_pointsofinterest_selectedindex_%29.md): Creates a point of interest template with a title, the points of interest to display, and the initial selection’s index.

# CPPointOfInterest (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes a point of interest on the template’s map and in its scrollable picker.

## Declaration

```objectivec
@interface CPPointOfInterest : NSObject
```

<a id="overview"></a>

## Overview

A point of interest describes a geographical location on a map. It also provides supplementary information about the location, such as a title and summary that the template displays in a scrollable picker and on a detail card. A point of interest also provides the buttons the detail card presents to the user as contextual actions.

You provide an array of `CPPointOfInterest` objects when initializing [CPPointOfInterestTemplate](cppointofinteresttemplate.md), or whenever the visible region of the template’s map changes, by calling the template’s [setPointsOfInterest:selectedIndex:](cppointofinteresttemplate/setpointsofinterest%28__selectedindex_%29.md) method.

`CPPointOfInterestTemplate` displays a maximum of twelve points of interest.

## Topics

### Creating a point of interest

- [initWithLocation:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:](cppointofinterest/init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_%29.md): Creates a point of interest for a specific location.
- [initWithLocation:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:selectedPinImage:](cppointofinterest/init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_selectedpinimage_%29.md)
- [pinImageSize](cppointofinterest/pinimagesize.md)
- [selectedPinImageSize](cppointofinterest/selectedpinimagesize.md)

### Managing the map annotation

- [location](cppointofinterest/location.md): The map item that contains the point of interest’s geographical information.
- [pinImage](cppointofinterest/pinimage.md): A custom image that the map annotation displays.

### Managing the picker item

- [title](cppointofinterest/title.md): The title that the picker’s item displays.
- [subtitle](cppointofinterest/subtitle.md): The subtitle that the picker’s item displays.
- [summary](cppointofinterest/summary.md): The summary that the picker’s item displays.

### Managing the detail card

- [detailTitle](cppointofinterest/detailtitle.md): The detail card’s title.
- [detailSubtitle](cppointofinterest/detailsubtitle.md): The detail card’s subtitle.
- [detailSummary](cppointofinterest/detailsummary.md): The detail card’s summary.

### Managing the pin image

- [selectedPinImage](cppointofinterest/selectedpinimage.md)

### Managing the buttons

- [primaryButton](cppointofinterest/primarybutton.md): The detail card’s primary action button.
- [secondaryButton](cppointofinterest/secondarybutton.md): The detail card’s secondary action button.

### Providing app-specific content

- [userInfo](cppointofinterest/userinfo.md): An opaque value for the point of interest.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a point of interest template

- [initWithTitle:pointsOfInterest:selectedIndex:](cppointofinteresttemplate/init%28title_pointsofinterest_selectedindex_%29.md): Creates a point of interest template with a title, the points of interest to display, and the initial selection’s index.
