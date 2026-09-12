> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsdeleterule/denydeleterule](https://developer.apple.com/documentation/coredata/nsdeleterule/denydeleterule)

# NSDeleteRule.denyDeleteRule (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

## Declaration

```swift
case denyDeleteRule
```

## See Also

### Delete Rules

- [NSDeleteRule.noActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSDeleteRule.nullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSDeleteRule.cascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.

# NSDenyDeleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

## Declaration

```objectivec
NSDenyDeleteRule
```

## See Also

### Delete Rules

- [NSNoActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSNullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSCascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.
