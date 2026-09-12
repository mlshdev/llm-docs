> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpimageoverlay/init(text:textcolor:backgroundcolor:alignment:)](https://developer.apple.com/documentation/carplay/cpimageoverlay/init(text:textcolor:backgroundcolor:alignment:))

# init(text:textColor:backgroundColor:alignment:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize an overlay with properties that control the overlay’s appearance and text contents.

## Declaration

```swift
init(text: String, textColor: UIColor, backgroundColor: UIColor, alignment: CPImageOverlay.Alignment)
```

## Parameters

- `text`: The text to display in the overlay.
- `textColor`: The color of the overlay text.
- `backgroundColor`: The background color of the overlay.
- `alignment`: The alignment for positioning the overlay.

# initWithText:textColor:backgroundColor:alignment: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize an overlay with properties that control the overlay’s appearance and text contents.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text textColor:(UIColor *) textColor backgroundColor:(UIColor *) backgroundColor alignment:(CPImageOverlayAlignment) alignment;
```

## Parameters

- `text`: The text to display in the overlay.
- `textColor`: The color of the overlay text.
- `backgroundColor`: The background color of the overlay.
- `alignment`: The alignment for positioning the overlay.
