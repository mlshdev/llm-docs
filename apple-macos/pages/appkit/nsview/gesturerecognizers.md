> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/gesturerecognizers](https://developer.apple.com/documentation/appkit/nsview/gesturerecognizers)

# gestureRecognizers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The gesture recognize objects currently attached to the view.

## Declaration

```swift
var gestureRecognizers: [NSGestureRecognizer] { get set }
```

<a id="Discussion"></a>

## Discussion

The objects in the array are concrete implementations of the `NSGestureRecognizer` class. If the view has no attached gesture recognizers, the array is empty.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer(\_:)](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer(\_:)](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSView.ExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

# gestureRecognizers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The gesture recognize objects currently attached to the view.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSGestureRecognizer *> * gestureRecognizers;
```

<a id="Discussion"></a>

## Discussion

The objects in the array are concrete implementations of the `NSGestureRecognizer` class. If the view has no attached gesture recognizers, the array is empty.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer:](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer:](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSViewExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior
