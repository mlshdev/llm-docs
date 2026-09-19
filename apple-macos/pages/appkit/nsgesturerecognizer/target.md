> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgesturerecognizer/target

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The object that implements the action method.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

The object in this property must implement the method specified by the [action](action.md) property.

## See Also

### Accessing the target and action

- [action](action.md): The action method to call when the gesture is recognized.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The object that implements the action method.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

The object in this property must implement the method specified by the [action](action.md) property.

## See Also

### Accessing the target and action

- [action](action.md): The action method to call when the gesture is recognized.
