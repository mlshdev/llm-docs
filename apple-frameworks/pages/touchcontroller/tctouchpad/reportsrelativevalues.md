> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchpad/reportsrelativevalues](https://developer.apple.com/documentation/touchcontroller/tctouchpad/reportsrelativevalues)

# reportsRelativeValues (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that represents the touchpad reports deltas.

## Declaration

```swift
var reportsRelativeValues: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, the touchpad will report relative delta changes between frames as touch moves instead of absolute positions.

## See Also

### Inspecting at touchpad

- [contents](contents.md): The contents for the touchpad. May be `nil`.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.

# reportsRelativeValues (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that represents the touchpad reports deltas.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL reportsRelativeValues;
```

<a id="discussion"></a>

## Discussion

If `YES`, the touchpad will report relative delta changes between frames as touch moves instead of absolute positions.

## See Also

### Inspecting at touchpad

- [contents](contents.md): The contents for the touchpad. May be `nil`.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
