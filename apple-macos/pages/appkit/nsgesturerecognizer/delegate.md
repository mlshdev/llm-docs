> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/delegate](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The delegate of the gesture recognizer.

## Declaration

```swift
weak var delegate: (any NSGestureRecognizerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate for fine-grained control over the recognition of a gesture. For example, you can use the delegate to determine whether gesture recognition should begin or whether it should start only after other gesture recognizers fail.

The delegate must implement the [NSGestureRecognizerDelegate](../nsgesturerecognizerdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The delegate of the gesture recognizer.

## Declaration

```objectivec
@property (weak, nullable) id<NSGestureRecognizerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate for fine-grained control over the recognition of a gesture. For example, you can use the delegate to determine whether gesture recognition should begin or whether it should start only after other gesture recognizers fail.

The delegate must implement the [NSGestureRecognizerDelegate](../nsgesturerecognizerdelegate.md) protocol.
