> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/needsinputmodeswitchkey](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/needsinputmodeswitchkey)

# needsInputModeSwitchKey (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the keyboard must display an input switcher key.

## Declaration

```swift
var needsInputModeSwitchKey: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The input switcher key allows the user to switch between different keyboards. When this property is true, your custom keyboard should provide such a key.

## See Also

### Configuring the keyboard behaviors

- [hasFullAccess](hasfullaccess.md): A Boolean value that indicates whether the keyboard has full access.
- [hasDictationKey](hasdictationkey.md): A Boolean value that indicates whether the keyboard has a dictation key.

# needsInputModeSwitchKey (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the keyboard must display an input switcher key.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL needsInputModeSwitchKey;
```

<a id="Discussion"></a>

## Discussion

The input switcher key allows the user to switch between different keyboards. When this property is true, your custom keyboard should provide such a key.

## See Also

### Configuring the keyboard behaviors

- [hasFullAccess](hasfullaccess.md): A Boolean value that indicates whether the keyboard has full access.
- [hasDictationKey](hasdictationkey.md): A Boolean value that indicates whether the keyboard has a dictation key.
