> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/settitle(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/settitle(_:))

# setTitle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the title of the interface.

## Declaration

```swift
func setTitle(_ title: String?)
```

## Parameters

- `title`: A localized string that identifies the current interface to the user. If the string is too long to fit on the screen, it is truncated.

<a id="Discussion"></a>

## Discussion

This method sets the string to display in the status bar when this interface controller is onscreen. Set the string to the name of your app or to any other text that provides the user with context about the purpose of the interface controller. You can also configure the title in your storyboard file.

To localize the title, use the value in the `title` parameter as the lookup key for a string in your `Localizable.strings` file. If you do not include a localized set of strings with that key in your Watch app bundle, WatchKit uses the value in `title` directly.

## See Also

### Creating the interface controller

- [init()](init%28%29.md): Returns an initialized interface controller object.
- [awake(withContext:)](awake%28withcontext_%29.md): Initializes the interface controller with the specified context data.

# setTitle: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the title of the interface.

## Declaration

```objectivec
- (void) setTitle:(NSString *) title;
```

## Parameters

- `title`: A localized string that identifies the current interface to the user. If the string is too long to fit on the screen, it is truncated.

<a id="Discussion"></a>

## Discussion

This method sets the string to display in the status bar when this interface controller is onscreen. Set the string to the name of your app or to any other text that provides the user with context about the purpose of the interface controller. You can also configure the title in your storyboard file.

To localize the title, use the value in the `title` parameter as the lookup key for a string in your `Localizable.strings` file. If you do not include a localized set of strings with that key in your Watch app bundle, WatchKit uses the value in `title` directly.

## See Also

### Creating the interface controller

- [init](init%28%29.md): Returns an initialized interface controller object.
- [awakeWithContext:](awake%28withcontext_%29.md): Initializes the interface controller with the specified context data.
