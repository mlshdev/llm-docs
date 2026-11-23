> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbuttonhandler

# CPBarButtonHandler (Swift)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

A block that CarPlay calls when the user taps a bar button.

## Declaration

```swift
typealias CPBarButtonHandler = (CPBarButton) -> Void
```

## See Also

### Creating a bar button

- [init(image:handler:)](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text string.
- [init(coder:)](cpbarbutton/init%28coder_%29.md)

# CPBarButtonHandler (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

A block that CarPlay calls when the user taps a bar button.

## Declaration

```objectivec
typedef void (^)(CPBarButton *) CPBarButtonHandler;
```

## See Also

### Creating a bar button

- [initWithImage:handler:](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text string.
