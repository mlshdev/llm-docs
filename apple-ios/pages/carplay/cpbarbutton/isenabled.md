> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/isenabled

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the button is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the button displays an enabled appearance and calls the attached handler in response to interactions. When the value of this property is `false`, the button displays a disabled appearance and doesn’t call the attached handler. The default value of this property is `true`.

## See Also

### Configuring the button

- [image](image.md): The image to display in the button.
- [title](title.md): The text to display in the button.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the button is enabled.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the button displays an enabled appearance and calls the attached handler in response to interactions. When the value of this property is `false`, the button displays a disabled appearance and doesn’t call the attached handler. The default value of this property is `true`.

## See Also

### Configuring the button

- [image](image.md): The image to display in the button.
- [title](title.md): The text to display in the button.
