> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefiltersettings/defaultaction

# defaultAction (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The default action to take for flows of network data that don’t match any of the specified rules.

## Declaration

```swift
var defaultAction: NEFilterAction { get }
```

## See Also

### Inspecting Filter Settings

- [rules](rules.md): An ordered list of rules that define the filter’s operation.

# defaultAction (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The default action to take for flows of network data that don’t match any of the specified rules.

## Declaration

```objectivec
@property (readonly) NEFilterAction defaultAction;
```

## See Also

### Inspecting Filter Settings

- [rules](rules.md): An ordered list of rules that define the filter’s operation.
