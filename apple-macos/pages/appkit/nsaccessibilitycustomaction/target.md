> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/target

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
