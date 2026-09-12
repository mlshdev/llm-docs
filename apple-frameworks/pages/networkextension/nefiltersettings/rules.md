> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltersettings/rules](https://developer.apple.com/documentation/networkextension/nefiltersettings/rules)

# rules (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

An ordered list of rules that define the filter’s operation.

## Declaration

```swift
var rules: [NEFilterRule] { get }
```

<a id="Discussion"></a>

## Discussion

After applying the [NEFilterSettings](../nefiltersettings.md), the system compares each network flow against these rules in order, and acts on the rule of the first [NEFilterAction](../nefilteraction.md) that matches.

## See Also

### Inspecting Filter Settings

- [defaultAction](defaultaction.md): The default action to take for flows of network data that don’t match any of the specified rules.

# rules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

An ordered list of rules that define the filter’s operation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NEFilterRule *> * rules;
```

<a id="Discussion"></a>

## Discussion

After applying the [NEFilterSettings](../nefiltersettings.md), the system compares each network flow against these rules in order, and acts on the rule of the first [NEFilterAction](../nefilteraction.md) that matches.

## See Also

### Inspecting Filter Settings

- [defaultAction](defaultaction.md): The default action to take for flows of network data that don’t match any of the specified rules.
