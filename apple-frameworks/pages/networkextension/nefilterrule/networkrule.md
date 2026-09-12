> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterrule/networkrule](https://developer.apple.com/documentation/networkextension/nefilterrule/networkrule)

# networkRule (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The network rule that defines the network traffic characteristics that this filter rule matches.

## Declaration

```swift
@NSCopying var networkRule: NENetworkRule { get }
```

## See Also

### Inspecting Filter Rule Properties

- [action](action.md): The action to take when this rule matches network traffic.

# networkRule (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The network rule that defines the network traffic characteristics that this filter rule matches.

## Declaration

```objectivec
@property (copy, readonly) NENetworkRule * networkRule;
```

## See Also

### Inspecting Filter Rule Properties

- [action](action.md): The action to take when this rule matches network traffic.
