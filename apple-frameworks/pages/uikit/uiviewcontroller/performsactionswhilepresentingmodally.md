> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/performsactionswhilepresentingmodally](https://developer.apple.com/documentation/uikit/uiviewcontroller/performsactionswhilepresentingmodally)

# performsActionsWhilePresentingModally (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value indicating whether the view controller performs menu-related actions.

## Declaration

```swift
var performsActionsWhilePresentingModally: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the view controller to handle actions passed along the responder chain by modally presented view controllers. If the app includes the `UIViewControllerPerformsActionsWhilePresentingModally` key in its `Info.plist` file, the default value matches the value of that key instead.

A presenting view controller might not want to handle actions in one of its modally presented child view controllers. Overriding this property and returning [false](https://developer.apple.com/documentation/swift/false) causes UIKit to ignore this view controller when searching for a target to handle actions.

## See Also

### Accessing the available key commands

- [addKeyCommand(\_:)](addkeycommand%28__%29.md): Associates the specified keyboard shortcut with the view controller.
- [removeKeyCommand(\_:)](removekeycommand%28__%29.md): Removes the key command from the view controller.

# performsActionsWhilePresentingModally (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value indicating whether the view controller performs menu-related actions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL performsActionsWhilePresentingModally;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the view controller to handle actions passed along the responder chain by modally presented view controllers. If the app includes the `UIViewControllerPerformsActionsWhilePresentingModally` key in its `Info.plist` file, the default value matches the value of that key instead.

A presenting view controller might not want to handle actions in one of its modally presented child view controllers. Overriding this property and returning [false](https://developer.apple.com/documentation/swift/false) causes UIKit to ignore this view controller when searching for a target to handle actions.

## See Also

### Accessing the available key commands

- [addKeyCommand:](addkeycommand%28__%29.md): Associates the specified keyboard shortcut with the view controller.
- [removeKeyCommand:](removekeycommand%28__%29.md): Removes the key command from the view controller.
