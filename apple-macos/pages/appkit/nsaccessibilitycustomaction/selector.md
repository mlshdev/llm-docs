> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction/selector

# selector (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The method to call on the target to perform the action.

## Declaration

```swift
var selector: Selector? { get set }
```

## See Also

### Getting the Action

- [handler](handler.md): The closure that handles the execution of the action.
- [target](target.md): The object that performs the action through a selector.

# selector (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The method to call on the target to perform the action.

## Declaration

```objectivec
@property (nullable) SEL selector;
```

## See Also

### Getting the Action

- [handler](handler.md): The closure that handles the execution of the action.
- [target](target.md): The object that performs the action through a selector.
