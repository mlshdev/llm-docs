> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/opened()](https://developer.apple.com/documentation/automator/amaction/opened())

# opened() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action to initialize its user interface.

## Declaration

```swift
func opened()
```

<a id="Discussion"></a>

## Discussion

The system invokes this method when the action is first added to a workflow.

You should perform all initializations of an action’s user interface in this method and not in `awakeFromNib`. Be sure to invoke the superclass implementation of this method as the final step of your implementation.

## See Also

### Initializing and Synchronizing the Action User Interface

- [activated()](activated%28%29.md): Allows the action to synchronize its information with settings in another app.

# opened (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action to initialize its user interface.

## Declaration

```objectivec
- (void) opened;
```

<a id="Discussion"></a>

## Discussion

The system invokes this method when the action is first added to a workflow.

You should perform all initializations of an action’s user interface in this method and not in `awakeFromNib`. Be sure to invoke the superclass implementation of this method as the final step of your implementation.

## See Also

### Initializing and Synchronizing the Action User Interface

- [activated](activated%28%29.md): Allows the action to synchronize its information with settings in another app.
