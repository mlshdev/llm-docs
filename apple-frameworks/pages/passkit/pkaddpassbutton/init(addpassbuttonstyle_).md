> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassbutton/init(addpassbuttonstyle:)](https://developer.apple.com/documentation/passkit/pkaddpassbutton/init(addpassbuttonstyle:))

# init(addPassButtonStyle:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new Add Pass button.

## Declaration

```swift
init(addPassButtonStyle style: PKAddPassButtonStyle)
```

## Parameters

- `style`: The button’s style. For a complete list of styles, see [PKAddPassButtonStyle](../pkaddpassbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a [PKAddPassButton](../pkaddpassbutton.md) instance with the specified style.

# initWithAddPassButtonStyle: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new Add Pass button.

## Declaration

```objectivec
- (instancetype) initWithAddPassButtonStyle:(PKAddPassButtonStyle) style;
```

## Parameters

- `style`: The button’s style. For a complete list of styles, see [PKAddPassButtonStyle](../pkaddpassbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a [PKAddPassButton](../pkaddpassbutton.md) instance with the specified style.

## See Also

### Creating add pass buttons

- [addPassButtonWithStyle:](addpassbuttonwithstyle_.md): Returns a button that prompts the user to add a pass to Wallet.
