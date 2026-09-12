> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/decoration](https://developer.apple.com/documentation/uikit/uicalendarview/decoration)

# UICalendarView.Decoration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A view that a calendar view displays for a specific date.

## Declaration

```swift
@MainActor class Decoration
```

## Topics

### Creating a Default Decoration View

- [init()](decoration/init%28%29.md): Creates a default calendar view decoration with a filled circle image, using the system fill color and medium size.
- [default(color:size:)](decoration/default%28color_size_%29.md): Creates a default calendar view decoration with a filled circle image, using the color and size you specify.

### Creating a Custom Decoration View

- [customView(\_:)](decoration/customview%28__%29.md): Creates a new calendar view decoration with a custom view, using your view provider.

### Creating Image Decoration Views

- [image(\_:color:size:)](decoration/image%28__color_size_%29.md): Creates a new calendar view decoration with the image, color, and size that you specify.

### Initializers

- [init(customViewProvider:)](decoration/init%28customviewprovider_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.DecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorations(forDateComponents:animated:)](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# UICalendarViewDecoration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A view that a calendar view displays for a specific date.

## Declaration

```objectivec
@interface UICalendarViewDecoration : NSObject
```

## Topics

### Creating a Default Decoration View

- [init](decoration/init%28%29.md): Creates a default calendar view decoration with a filled circle image, using the system fill color and medium size.
- [decorationWithColor:size:](../uicalendarviewdecoration/decorationwithcolor_size_.md): Creates a new calendar view decoration with a filled circle image, using the color and size that you specify.

### Creating a Custom Decoration View

- [initWithCustomViewProvider:](../uicalendarviewdecoration/initwithcustomviewprovider_.md): Creates a new calendar view decoration with a custom view, using your view provider.
- [decorationWithCustomViewProvider:](decoration/customview%28__%29.md): Creates a new calendar view decoration with a custom view, using your view provider.

### Creating Image Decoration Views

- [initWithImage:color:size:](../uicalendarviewdecoration/initwithimage_color_size_.md): Creates a new calendar view decoration with the image, color, and size that you specify.
- [decorationWithImage:](../uicalendarviewdecoration/decorationwithimage_.md): Creates a new calendar view decoration with the image you specify, using the system fill color and medium relative size.
- [decorationWithImage:color:size:](../uicalendarviewdecoration/decorationwithimage_color_size_.md): Creates a new calendar view decoration with the image, color, and size that you specify.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorationsForDateComponents:animated:](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
