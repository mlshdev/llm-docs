> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthenticationembeddedui/laauthenticationview/init(context:controlsize:)](https://developer.apple.com/documentation/localauthenticationembeddedui/laauthenticationview/init(context:controlsize:))

# init(context:controlSize:) (Swift)

**Framework:** Local Authentication Embedded UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new authentication icon that reflects the current authentication state, using a specified size.

## Declaration

```swift
init(context: LAContext, controlSize: NSControl.ControlSize)
```

## Parameters

- `context`: A local authentication context to associate with the icon.
- `controlSize`: The size of the authentication view’s user interface element. Use one of the values in [NSControl.ControlSize](https://developer.apple.com/documentation/appkit/nscontrol/controlsize-swift.enum).

<a id="discussion"></a>

## Discussion

This initializer behaves like [init(context:)](init%28context_%29.md), except that it also allows you to specify a size for the view. If you don’t specify a size, the view uses the [NSControl.ControlSize.regular](https://developer.apple.com/documentation/appkit/nscontrol/controlsize-swift.enum/regular) size by default.

## See Also

### Controlling the size of a local authentication view

- [controlSize](controlsize.md): The size of the local authentication view user interface element.

# initWithContext:controlSize: (Objective-C)

**Framework:** Local Authentication Embedded UI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new authentication icon that reflects the current authentication state, using a specified size.

## Declaration

```objectivec
- (instancetype) initWithContext:(LAContext *) context controlSize:(NSControlSize) controlSize;
```

## Parameters

- `context`: A local authentication context to associate with the icon.
- `controlSize`: The size of the authentication view’s user interface element. Use one of the values in [NSControlSize](https://developer.apple.com/documentation/appkit/nscontrol/controlsize-swift.enum).

<a id="discussion"></a>

## Discussion

This initializer behaves like [initWithContext:](init%28context_%29.md), except that it also allows you to specify a size for the view. If you don’t specify a size, the view uses the [NSControlSizeRegular](https://developer.apple.com/documentation/appkit/nscontrol/controlsize-swift.enum/regular) size by default.

## See Also

### Controlling the size of a local authentication view

- [controlSize](controlsize.md): The size of the local authentication view user interface element.
