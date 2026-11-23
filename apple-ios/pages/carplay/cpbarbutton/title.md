> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/title

# title (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The text to display in the button.

## Declaration

```swift
var title: String? { get set }
```

<a id="discussion"></a>

## Discussion

Specify the button’s text at initialization time and use this property to update it. If you initialize the button with an image instead of text, this property is `nil`.

## See Also

### Configuring the button

- [image](image.md): The image to display in the button.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the button is enabled.

# title (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The text to display in the button.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="discussion"></a>

## Discussion

Specify the button’s text at initialization time and use this property to update it. If you initialize the button with an image instead of text, this property is `nil`.

## See Also

### Configuring the button

- [image](image.md): The image to display in the button.
- [enabled](isenabled.md): A Boolean value that indicates whether the button is enabled.
