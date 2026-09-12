> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/issecuretextentry](https://developer.apple.com/documentation/uikit/uitextinputtraits/issecuretextentry)

# isSecureTextEntry (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that indicates whether a text object disables copying, and in some cases, prevents recording/broadcasting and also hides the text.

## Declaration

```swift
optional var isSecureTextEntry: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is set to [false](https://developer.apple.com/documentation/swift/false) by default. Setting this property to [true](https://developer.apple.com/documentation/swift/true) in any view that conforms to [UITextInputTraits](../uitextinputtraits.md) disables the user’s ability to copy the text in the view and, in some cases, also disables the user’s ability to record and broadcast the text in the view.

Setting this property to [true](https://developer.apple.com/documentation/swift/true) in a [UITextField](../uitextfield.md) object additionally enables a password-style experience, in which the text being entered is obscured.

## See Also

### Managing the keyboard behavior

- [enablesReturnKeyAutomatically](enablesreturnkeyautomatically.md): A Boolean value that indicates whether the system automatically enables the Return key when the user enters text.

# secureTextEntry (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that indicates whether a text object disables copying, and in some cases, prevents recording/broadcasting and also hides the text.

## Declaration

```objectivec
@property (nonatomic, getter=isSecureTextEntry) BOOL secureTextEntry;
```

<a id="Discussion"></a>

## Discussion

This property is set to [false](https://developer.apple.com/documentation/swift/false) by default. Setting this property to [true](https://developer.apple.com/documentation/swift/true) in any view that conforms to [UITextInputTraits](../uitextinputtraits.md) disables the user’s ability to copy the text in the view and, in some cases, also disables the user’s ability to record and broadcast the text in the view.

Setting this property to [true](https://developer.apple.com/documentation/swift/true) in a [UITextField](../uitextfield.md) object additionally enables a password-style experience, in which the text being entered is obscured.

## See Also

### Managing the keyboard behavior

- [enablesReturnKeyAutomatically](enablesreturnkeyautomatically.md): A Boolean value that indicates whether the system automatically enables the Return key when the user enters text.
