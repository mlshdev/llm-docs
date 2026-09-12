> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/exclusivegesturebehavior-swift.property](https://developer.apple.com/documentation/appkit/nsview/exclusivegesturebehavior-swift.property)

# exclusiveGestureBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Declares whether gesture recognizers should be exclusive in this view and its subviews.

## Declaration

```swift
var exclusiveGestureBehavior: NSView.ExclusiveGestureBehavior { get set }
```

<a id="discussion"></a>

## Discussion

When a view is set to `.exclusive`, and one or more of its gesture recognizers is active, a second input event will not activate any further gesture recognizers, unless that event hit tests to this view or its subviews.

Defaults to `.inherit`.

## See Also

### Managing gesture exclusivity

- [NSView.ExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

# exclusiveGestureBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Declares whether gesture recognizers should be exclusive in this view and its subviews.

## Declaration

```objectivec
@property NSViewExclusiveGestureBehavior exclusiveGestureBehavior;
```

<a id="discussion"></a>

## Discussion

When a view is set to `.exclusive`, and one or more of its gesture recognizers is active, a second input event will not activate any further gesture recognizers, unless that event hit tests to this view or its subviews.

Defaults to `.inherit`.

## See Also

### Managing gesture exclusivity

- [NSViewExclusiveGestureBehavior](exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior
