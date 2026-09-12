> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomaction/handler](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/handler)

# handler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The closure that handles the execution of the action.

## Declaration

```swift
var handler: (() -> Bool)? { get set }
```

## See Also

### Getting the Action

- [target](target.md): The object that performs the action through a selector.
- [selector](selector.md): The method to call on the target to perform the action.

# handler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The closure that handles the execution of the action.

## Declaration

```objectivec
@property (copy, nullable) BOOL (^handler)();
```

## See Also

### Getting the Action

- [target](target.md): The object that performs the action through a selector.
- [selector](selector.md): The method to call on the target to perform the action.
