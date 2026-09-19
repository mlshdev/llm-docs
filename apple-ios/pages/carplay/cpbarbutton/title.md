> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/title

# title (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The title displayed on the bar button.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property has an effect only when the button type is [CPBarButton.Type.text](type/text.md).

## See Also

### Configuring the Button

- [isEnabled](isenabled.md): A Boolean value that enables and disables the bar button.
- [image](image.md): The image displayed on the bar button.

# title (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The title displayed on the bar button.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

Setting this property has an effect only when the button type is [CPBarButtonTypeText](type/text.md).

## See Also

### Configuring the Button

- [enabled](isenabled.md): A Boolean value that enables and disables the bar button.
- [image](image.md): The image displayed on the bar button.
