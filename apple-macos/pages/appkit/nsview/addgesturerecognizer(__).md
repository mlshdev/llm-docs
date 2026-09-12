> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addgesturerecognizer(_:)](https://developer.apple.com/documentation/appkit/nsview/addgesturerecognizer(_:))

# addGestureRecognizer(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Attaches a gesture recognizer to the view.

## Declaration

```swift
func addGestureRecognizer(_ gestureRecognizer: NSGestureRecognizer)
```

## Parameters

- `gestureRecognizer`: The gesture recognizer to attach to the view. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Attaching a gesture recognizer to a view defines the scope of the represented gesture, causing it to receive touches occurring only in the view or one of its subviews. The view establishes a strong reference to the specified gesture recognizer.

## See Also

### Managing gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [removeGestureRecognizer(\_:)](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSView.ExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

# addGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Attaches a gesture recognizer to the view.

## Declaration

```objectivec
- (void) addGestureRecognizer:(NSGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer to attach to the view. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Attaching a gesture recognizer to a view defines the scope of the represented gesture, causing it to receive touches occurring only in the view or one of its subviews. The view establishes a strong reference to the specified gesture recognizer.

## See Also

### Managing gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [removeGestureRecognizer:](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSViewExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior
