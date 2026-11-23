> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration/init(title:buttons:)

# init(title:buttons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a MultiStopCardConfiguration with an optional title and an array of text buttons

## Declaration

```swift
init(title: String?, buttons: [CPTextButton])
```

## See Also

### Creating a configuration object

- [init(title:buttons:image:)](init%28title_buttons_image_%29.md): Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image
- [init(coder:)](init%28coder_%29.md)

# initWithTitle:buttons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a MultiStopCardConfiguration with an optional title and an array of text buttons

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title buttons:(NSArray<CPTextButton *> *) buttons;
```

## See Also

### Creating a configuration object

- [initWithTitle:buttons:image:](init%28title_buttons_image_%29.md): Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image
