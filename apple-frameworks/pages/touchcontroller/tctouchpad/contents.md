> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tctouchpad/contents

# contents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the touchpad. May be `nil`.

## Declaration

```swift
var contents: TCControlContents? { get set }
```

## See Also

### Inspecting at touchpad

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [reportsRelativeValues](reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.

# contents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the touchpad. May be `nil`.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * contents;
```

## See Also

### Inspecting at touchpad

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [reportsRelativeValues](reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.
