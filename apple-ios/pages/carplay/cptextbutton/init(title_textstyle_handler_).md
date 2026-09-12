> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptextbutton/init(title:textstyle:handler:)](https://developer.apple.com/documentation/carplay/cptextbutton/init(title:textstyle:handler:))

# init(title:textStyle:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that displays a title in a specific style.

## Declaration

```swift
init(title: String, textStyle: CPTextButtonStyle, handler: ((CPTextButton) -> Void)? = nil)
```

## Parameters

- `title`: The text that the button displays.
- `textStyle`: The style that the button applies to its title.
- `handler`: A closure that CarPlay invokes when the user taps the button.

# initWithTitle:textStyle:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that displays a title in a specific style.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title textStyle:(CPTextButtonStyle) textStyle handler:(void (^)(CPTextButton *contactButton)) handler;
```

## Parameters

- `title`: The text that the button displays.
- `textStyle`: The style that the button applies to its title.
- `handler`: A closure that CarPlay invokes when the user taps the button.
