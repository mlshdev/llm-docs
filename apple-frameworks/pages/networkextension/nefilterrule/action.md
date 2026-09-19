> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterrule/action

# action (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The action to take when this rule matches network traffic.

## Declaration

```swift
var action: NEFilterAction { get }
```

## See Also

### Inspecting Filter Rule Properties

- [networkRule](networkrule.md): The network rule that defines the network traffic characteristics that this filter rule matches.

# action (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The action to take when this rule matches network traffic.

## Declaration

```objectivec
@property (readonly) NEFilterAction action;
```

## See Also

### Inspecting Filter Rule Properties

- [networkRule](networkrule.md): The network rule that defines the network traffic characteristics that this filter rule matches.
