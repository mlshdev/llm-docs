> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridbutton/init(titlevariants:image:messageconfiguration:handler:)](https://developer.apple.com/documentation/carplay/cpgridbutton/init(titlevariants:image:messageconfiguration:handler:))

# init(titleVariants:image:messageConfiguration:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a button with a title, image, and message configuration.

## Declaration

```swift
init(titleVariants: [String], image: UIImage, messageConfiguration: CPMessageGridItemConfiguration?, handler: ((CPGridButton) -> Void)? = nil)
```

# initWithTitleVariants:image:messageConfiguration:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a button with a title, image, and message configuration.

## Declaration

```objectivec
- (instancetype) initWithTitleVariants:(NSArray<NSString *> *) titleVariants image:(UIImage *) image messageConfiguration:(CPMessageGridItemConfiguration *) messageConfiguration handler:(void (^)(CPGridButton *gridButton)) handler;
```
