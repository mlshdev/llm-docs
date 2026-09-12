> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassbutton/addpassbuttonwithstyle:](https://developer.apple.com/documentation/passkit/pkaddpassbutton/addpassbuttonwithstyle:)

# addPassButtonWithStyle:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a button that prompts the user to add a pass to Wallet.

## Declaration

```objectivec
+ (instancetype) addPassButtonWithStyle:(PKAddPassButtonStyle) addPassButtonStyle;
```

## Parameters

- `addPassButtonStyle`: The button’s style. For a complete list of styles, see [PKAddPassButtonStyle](../pkaddpassbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a [PKAddPassButton](../pkaddpassbutton.md) instance with the specified style.

## See Also

### Creating add pass buttons

- [initWithAddPassButtonStyle:](init%28addpassbuttonstyle_%29.md): Initializes a new Add Pass button.
