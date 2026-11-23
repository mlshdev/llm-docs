> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpgridbutton/init(titlevariants:image:messageconfiguration:handler:)

# init(titleVariants:image:messageConfiguration:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a button with a title, image, and message configuration.

## Declaration

```swift
init(titleVariants: [String], image: UIImage, messageConfiguration: CPMessageGridItemConfiguration?, handler: ((CPGridButton) -> Void)? = nil)
```

## See Also

### Creating a grid button

- [init(titleVariants:image:handler:)](init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.
- [init(coder:)](init%28coder_%29.md)

# initWithTitleVariants:image:messageConfiguration:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a button with a title, image, and message configuration.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants image:(UIImage *) image messageConfiguration:(CPMessageGridItemConfiguration *) messageConfiguration handler:(void (^)(CPGridButton *gridButton)) handler;
```

## See Also

### Creating a grid button

- [initWithTitleVariants:image:handler:](init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.
