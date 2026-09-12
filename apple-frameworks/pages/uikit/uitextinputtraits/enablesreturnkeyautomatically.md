> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/enablesreturnkeyautomatically](https://developer.apple.com/documentation/uikit/uitextinputtraits/enablesreturnkeyautomatically)

# enablesReturnKeyAutomatically (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that indicates whether the system automatically enables the Return key when the user enters text.

## Declaration

```swift
optional var enablesReturnKeyAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you set it to [true](https://developer.apple.com/documentation/swift/true), the keyboard disables the Return key when the text entry area contains no text. As soon as the user enters some text, the Return key is automatically enabled.

## See Also

### Managing the keyboard behavior

- [isSecureTextEntry](issecuretextentry.md): A Boolean value that indicates whether a text object disables copying, and in some cases, prevents recording/broadcasting and also hides the text.

# enablesReturnKeyAutomatically (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that indicates whether the system automatically enables the Return key when the user enters text.

## Declaration

```objectivec
@property (nonatomic) BOOL enablesReturnKeyAutomatically;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). If you set it to [true](https://developer.apple.com/documentation/swift/true), the keyboard disables the Return key when the text entry area contains no text. As soon as the user enters some text, the Return key is automatically enabled.

## See Also

### Managing the keyboard behavior

- [secureTextEntry](issecuretextentry.md): A Boolean value that indicates whether a text object disables copying, and in some cases, prevents recording/broadcasting and also hides the text.
