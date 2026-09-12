> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmultistopcardconfiguration/init(title:buttons:image:)](https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/init(title:buttons:image:))

# init(title:buttons:image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image

## Declaration

```swift
init(title: String?, buttons: [CPTextButton], image: UIImage?)
```

<a id="discussion"></a>

## Discussion

Your app should provide a @c UIImage that is display-ready, containing two @c UIImageAssets, corresponding to night and day mode.

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

# initWithTitle:buttons:image: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title buttons:(NSArray<CPTextButton *> *) buttons image:(UIImage *) image;
```

<a id="discussion"></a>

## Discussion

Your app should provide a @c UIImage that is display-ready, containing two @c UIImageAssets, corresponding to night and day mode.

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.
