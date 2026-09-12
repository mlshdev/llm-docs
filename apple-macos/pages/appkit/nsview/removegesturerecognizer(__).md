> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removegesturerecognizer(_:)](https://developer.apple.com/documentation/appkit/nsview/removegesturerecognizer(_:))

# removeGestureRecognizer(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Detaches a gesture recognizer from the view.

## Declaration

```swift
func removeGestureRecognizer(_ gestureRecognizer: NSGestureRecognizer)
```

## Parameters

- `gestureRecognizer`: The gesture recognizer to remove. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Removing a gesture recognizer also removes the strong reference to it held by the view.

## See Also

### Managing gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [addGestureRecognizer(\_:)](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSView.ExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

# removeGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Detaches a gesture recognizer from the view.

## Declaration

```objectivec
- (void) removeGestureRecognizer:(NSGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer to remove. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Removing a gesture recognizer also removes the strong reference to it held by the view.

## See Also

### Managing gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [addGestureRecognizer:](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSViewExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior
