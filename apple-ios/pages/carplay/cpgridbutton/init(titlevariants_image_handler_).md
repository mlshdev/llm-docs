> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridbutton/init(titlevariants:image:handler:)](https://developer.apple.com/documentation/carplay/cpgridbutton/init(titlevariants:image:handler:))

# init(titleVariants:image:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a grid button with the specified title variants, image, and action handler.

## Declaration

```swift
convenience init(titleVariants: [String], image: UIImage, handler: ((CPGridButton) -> Void)? = nil)
```

## Parameters

- `titleVariants`: An array of title variants for the button. Each title should be localized and ready for display to the user. When the system displays the button, it selects the title that best fits the available screen space, so arrange the variants from most to least preferred. Always include at least one title in the array.
- `image`: The image to display on the button. If you provide an animated image, the button uses the first image in the animation sequence.
- `handler`: The block invoked after the user taps the button. In Swift, the default is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized grid button.

# initWithTitleVariants:image:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a grid button with the specified title variants, image, and action handler.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants image:(UIImage *) image handler:(void (^)(CPGridButton *gridButton)) handler;
```

## Parameters

- `titleVariants`: An array of title variants for the button. Each title should be localized and ready for display to the user. When the system displays the button, it selects the title that best fits the available screen space, so arrange the variants from most to least preferred. Always include at least one title in the array.
- `image`: The image to display on the button. If you provide an animated image, the button uses the first image in the animation sequence.
- `handler`: The block invoked after the user taps the button. In Swift, the default is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized grid button.
