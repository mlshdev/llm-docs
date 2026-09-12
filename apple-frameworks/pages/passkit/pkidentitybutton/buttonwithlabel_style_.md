> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitybutton/buttonwithlabel:style:](https://developer.apple.com/documentation/passkit/pkidentitybutton/buttonwithlabel:style:)

# buttonWithLabel:style:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new identity button with the label and style.

## Declaration

```objectivec
+ (instancetype) buttonWithLabel:(PKIdentityButtonLabel) label style:(PKIdentityButtonStyle) style;
```

## Parameters

- `label`: The button’s label.
- `style`: The button’s appearance.

## See Also

### Creating an identity button

- [initWithLabel:style:](init%28label_style_%29.md): Creates a new identity button with the label and style.
