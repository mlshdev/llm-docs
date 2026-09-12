> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/init(identifier:titlevariants:image:backgroundimage:repeats:)](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/init(identifier:titlevariants:image:backgroundimage:repeats:))

# init(identifier:titleVariants:image:backgroundImage:repeats:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a voice control state with a title and image.

## Declaration

```swift
init(identifier: String, titleVariants: [String]?, image: UIImage?, backgroundImage: UIImage?, repeats: Bool)
```

## Parameters

- `identifier`: A custom identifier you can use to identify this voice control state. You’ll also switch to this state by specifying this identifier.
- `titleVariants`: An array of title variants. The Voice Control template will select the longest variant that fits your specified content.
- `image`: An image to be animated while this template is visible. The system enforces a minimum cycle duration of 0.3 seconds and a maximum cycle duration of 5 seconds. Voice Control state images may be a maximum of 150 by 150 points.
- `backgroundImage`: A custom background image to be displayed behind the voice control template content. The background image fills the entire template view and appears behind all voice control state content, including the state image, title variants, and action buttons.
- `repeats`: For an animated image, YES if the animation should repeat indefinitely, NO to run the animation only once.

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

# initWithIdentifier:titleVariants:image:backgroundImage:repeats: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a voice control state with a title and image.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier titleVariants:(NSArray<NSString *> *) titleVariants image:(UIImage *) image backgroundImage:(UIImage *) backgroundImage repeats:(BOOL) repeats;
```

## Parameters

- `identifier`: A custom identifier you can use to identify this voice control state. You’ll also switch to this state by specifying this identifier.
- `titleVariants`: An array of title variants. The Voice Control template will select the longest variant that fits your specified content.
- `image`: An image to be animated while this template is visible. The system enforces a minimum cycle duration of 0.3 seconds and a maximum cycle duration of 5 seconds. Voice Control state images may be a maximum of 150 by 150 points.
- `backgroundImage`: A custom background image to be displayed behind the voice control template content. The background image fills the entire template view and appears behind all voice control state content, including the state image, title variants, and action buttons.
- `repeats`: For an animated image, YES if the animation should repeat indefinitely, NO to run the animation only once.

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.
