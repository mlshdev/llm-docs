> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsrelationshipdescription/deleterule

# deleteRule (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The rule to apply when you delete the relationship’s owning managed object.

## Declaration

```swift
var deleteRule: NSDeleteRule { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSDeleteRule.nullifyDeleteRule](../nsdeleterule/nullifydeleterule.md). For possible values, see [NSDeleteRule](../nsdeleterule.md).

## See Also

### Configuring Delete Behavior

- [NSDeleteRule](../nsdeleterule.md): Constants that determine what happens when you delete a relationship’s owning managed object.

# deleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The rule to apply when you delete the relationship’s owning managed object.

## Declaration

```objectivec
@property NSDeleteRule deleteRule;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSNullifyDeleteRule](../nsdeleterule/nullifydeleterule.md). For possible values, see [NSDeleteRule](../nsdeleterule.md).

## See Also

### Configuring Delete Behavior

- [NSDeleteRule](../nsdeleterule.md): Constants that determine what happens when you delete a relationship’s owning managed object.
