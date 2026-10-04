> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automator/amworkflowcontroller/delegate

# delegate (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The controller’s delegate.

## Declaration

```swift
weak var delegate: (any AMWorkflowControllerDelegate)? { get set }
```

<a id="return-value"></a>

## Return Value

The controller’s delegate.

<a id="Discussion"></a>

## Discussion

This object receives updates on the progress and state of the workflow controller.

## See Also

### Accessing the Delegate

- [AMWorkflowControllerDelegate](../amworkflowcontrollerdelegate.md): A set of optional methods that a delegate of a workflow controller implements.

# delegate (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AMWorkflowControllerDelegate> delegate;
```

<a id="return-value"></a>

## Return Value

The controller’s delegate.

<a id="Discussion"></a>

## Discussion

This object receives updates on the progress and state of the workflow controller.

## See Also

### Accessing the Delegate

- [AMWorkflowControllerDelegate](../amworkflowcontrollerdelegate.md): A set of optional methods that a delegate of a workflow controller implements.
