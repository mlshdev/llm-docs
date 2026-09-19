> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automator/amaction/activated()

# activated() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action to synchronize its information with settings in another app.

## Declaration

```swift
func activated()
```

<a id="Discussion"></a>

## Discussion

The system invokes this method when the window of the Automator workflow to which the action belongs becomes the main window.

Be sure to invoke the superclass implementation of this method as the last thing in your implementation.

## See Also

### Initializing and Synchronizing the Action User Interface

- [opened()](opened%28%29.md): Allows the action to initialize its user interface.

# activated (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Allows the action to synchronize its information with settings in another app.

## Declaration

```objectivec
- (void) activated;
```

<a id="Discussion"></a>

## Discussion

The system invokes this method when the window of the Automator workflow to which the action belongs becomes the main window.

Be sure to invoke the superclass implementation of this method as the last thing in your implementation.

## See Also

### Initializing and Synchronizing the Action User Interface

- [opened](opened%28%29.md): Allows the action to initialize its user interface.
