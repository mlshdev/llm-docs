> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsdeleterule/cascadedeleterule](https://developer.apple.com/documentation/coredata/nsdeleterule/cascadedeleterule)

# NSDeleteRule.cascadeDeleteRule (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that deletes the referenced managed objects.

## Declaration

```swift
case cascadeDeleteRule
```

## See Also

### Delete Rules

- [NSDeleteRule.noActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSDeleteRule.nullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSDeleteRule.denyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

# NSCascadeDeleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that deletes the referenced managed objects.

## Declaration

```objectivec
NSCascadeDeleteRule
```

## See Also

### Delete Rules

- [NSNoActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSNullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSDenyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.
