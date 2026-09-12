> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomaction/target](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The object that performs the action through a selector.

## Declaration

```swift
weak var target: (any NSObjectProtocol)? { get set }
```

## See Also

### Getting the Action

- [handler](handler.md): The closure that handles the execution of the action.
- [selector](selector.md): The method to call on the target to perform the action.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The object that performs the action through a selector.

## Declaration

```objectivec
@property (weak, nullable) id<NSObject> target;
```

## See Also

### Getting the Action

- [handler](handler.md): The closure that handles the execution of the action.
- [selector](selector.md): The method to call on the target to perform the action.
