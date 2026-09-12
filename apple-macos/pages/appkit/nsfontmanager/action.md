> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/action](https://developer.apple.com/documentation/appkit/nsfontmanager/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.

## Declaration

```swift
var action: Selector { get set }
```

<a id="Discussion"></a>

## Discussion

The default action is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). You should rarely need to change this setting.

## See Also

### Accessing the Action Property

- [target](target.md): The object that receives action messages related to the font manager.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.

## Declaration

```objectivec
@property SEL action;
```

<a id="Discussion"></a>

## Discussion

The default action is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). You should rarely need to change this setting.

## See Also

### Accessing the Action Property

- [target](target.md): The object that receives action messages related to the font manager.
