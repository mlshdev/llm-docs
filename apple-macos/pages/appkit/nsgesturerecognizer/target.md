> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/target](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/target)

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

### Accessing the Target and Action

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

### Accessing the Target and Action

- [action](action.md): The action method to call when the gesture is recognized.
