> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptextbuttonstyle](https://developer.apple.com/documentation/carplay/cptextbuttonstyle)

# CPTextButtonStyle (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The styles a button can apply to its title to communicate its action.

## Declaration

```swift
enum CPTextButtonStyle
```

## Topics

### Button Text Styles

- [CPTextButtonStyle.normal](cptextbuttonstyle/normal.md): A style that indicates the button performs an action other than to confirm or cancel.
- [CPTextButtonStyle.confirm](cptextbuttonstyle/confirm.md): A style that indicates the button confirms an action and changes data.
- [CPTextButtonStyle.cancel](cptextbuttonstyle/cancel.md): A style that indicates the button cancels an action and doesn’t change data.

### Initializers

- [init(rawValue:)](cptextbuttonstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Button Style

- [textStyle](cptextbutton/textstyle.md): The text style the button applies to its title.

# CPTextButtonStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The styles a button can apply to its title to communicate its action.

## Declaration

```objectivec
enum CPTextButtonStyle : NSInteger;
```

## Topics

### Button Text Styles

- [CPTextButtonStyleNormal](cptextbuttonstyle/normal.md): A style that indicates the button performs an action other than to confirm or cancel.
- [CPTextButtonStyleConfirm](cptextbuttonstyle/confirm.md): A style that indicates the button confirms an action and changes data.
- [CPTextButtonStyleCancel](cptextbuttonstyle/cancel.md): A style that indicates the button cancels an action and doesn’t change data.

## See Also

### Managing the Button Style

- [textStyle](cptextbutton/textstyle.md): The text style the button applies to its title.
