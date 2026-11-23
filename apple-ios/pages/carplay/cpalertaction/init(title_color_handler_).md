> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpalertaction/init(title:color:handler:)

# init(title:color:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```swift
init(title: String, color: UIColor, handler: @escaping CPAlertActionHandler)
```

## See Also

### Creating an alert action

- [init(title:style:handler:)](init%28title_style_handler_%29.md): Creates an alert action with a title, style, and action handler.
- [init(coder:)](init%28coder_%29.md)

# initWithTitle:color:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title color:(UIColor *) color handler:(CPAlertActionHandler) handler;
```

## See Also

### Creating an alert action

- [initWithTitle:style:handler:](init%28title_style_handler_%29.md): Creates an alert action with a title, style, and action handler.
