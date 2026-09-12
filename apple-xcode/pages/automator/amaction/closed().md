> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amaction/closed()](https://developer.apple.com/documentation/automator/amaction/closed())

# closed() (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Invoked by Automator when the receiving action is removed from a workflow, allowing it to perform cleanup operations.

## Declaration

```swift
func closed()
```

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden, so that your action can perform its specific cleanup operations.

# closed (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.5+

Invoked by Automator when the receiving action is removed from a workflow, allowing it to perform cleanup operations.

## Declaration

```objectivec
- (void) closed;
```

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden, so that your action can perform its specific cleanup operations.
