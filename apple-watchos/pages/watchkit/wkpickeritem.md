> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpickeritem](https://developer.apple.com/documentation/watchkit/wkpickeritem)

# WKPickerItem (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A single item in a picker interface.

## Declaration

```swift
class WKPickerItem
```

<a id="overview"></a>

## Overview

You create picker items yourself and assign them to a [WKInterfacePicker](wkinterfacepicker.md) object in your interface. For each item, you can specify a title string, an image, or both based on the style of the picker.

The style of the picker determines how you configure the items of that picker:

- List. Items may be configured in one of two ways:
- Specify an image in the [contentImage](wkpickeritem/contentimage.md) property.
- Specify text in the [title](wkpickeritem/title.md) property and an optional image in the [accessoryImage](wkpickeritem/accessoryimage.md) property.
- Stacked. Configure each item with an image in the [contentImage](wkpickeritem/contentimage.md) property.
- Image Sequence. Configure each item with an image in the [contentImage](wkpickeritem/contentimage.md) property.

## Topics

### Setting the Picker Item’s Content

- [contentImage](wkpickeritem/contentimage.md): The image to display for the item.
- [title](wkpickeritem/title.md): The text to display for the item.
- [accessoryImage](wkpickeritem/accessoryimage.md): A small image to display next to the title string.
- [caption](wkpickeritem/caption.md): A caption for the item’s content.

### Initializers

- [init(coder:)](wkpickeritem/init%28coder_%29.md)

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

### Managing the Picker Contents

- [setItems(\_:)](wkinterfacepicker/setitems%28__%29.md): Sets the list of items displayed by the picker.
- [setSelectedItemIndex(\_:)](wkinterfacepicker/setselecteditemindex%28__%29.md): Selects the specified item in the list.
- [setCoordinatedAnimations(\_:)](wkinterfacepicker/setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.

# WKPickerItem (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A single item in a picker interface.

## Declaration

```objectivec
@interface WKPickerItem : NSObject
```

<a id="overview"></a>

## Overview

You create picker items yourself and assign them to a [WKInterfacePicker](wkinterfacepicker.md) object in your interface. For each item, you can specify a title string, an image, or both based on the style of the picker.

The style of the picker determines how you configure the items of that picker:

- List. Items may be configured in one of two ways:
- Specify an image in the [contentImage](wkpickeritem/contentimage.md) property.
- Specify text in the [title](wkpickeritem/title.md) property and an optional image in the [accessoryImage](wkpickeritem/accessoryimage.md) property.
- Stacked. Configure each item with an image in the [contentImage](wkpickeritem/contentimage.md) property.
- Image Sequence. Configure each item with an image in the [contentImage](wkpickeritem/contentimage.md) property.

## Topics

### Setting the Picker Item’s Content

- [contentImage](wkpickeritem/contentimage.md): The image to display for the item.
- [title](wkpickeritem/title.md): The text to display for the item.
- [accessoryImage](wkpickeritem/accessoryimage.md): A small image to display next to the title string.
- [caption](wkpickeritem/caption.md): A caption for the item’s content.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing the Picker Contents

- [setItems:](wkinterfacepicker/setitems%28__%29.md): Sets the list of items displayed by the picker.
- [setSelectedItemIndex:](wkinterfacepicker/setselecteditemindex%28__%29.md): Selects the specified item in the list.
- [setCoordinatedAnimations:](wkinterfacepicker/setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.
