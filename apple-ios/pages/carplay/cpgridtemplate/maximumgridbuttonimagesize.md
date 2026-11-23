> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpgridtemplate/maximumgridbuttonimagesize

# maximumGridButtonImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for your @c CPGridButton.

## Declaration

```swift
class var maximumGridButtonImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Creating a grid template

- [init(title:gridButtons:)](init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.

# maximumGridButtonImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for your @c CPGridButton.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumGridButtonImageSize;
```

<a id="discussion"></a>

## Discussion

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Creating a grid template

- [initWithTitle:gridButtons:](init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
