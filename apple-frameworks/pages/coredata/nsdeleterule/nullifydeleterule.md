> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsdeleterule/nullifydeleterule](https://developer.apple.com/documentation/coredata/nsdeleterule/nullifydeleterule)

# NSDeleteRule.nullifyDeleteRule (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that nullifies the inverse relationship of the referenced managed objects.

## Declaration

```swift
case nullifyDeleteRule
```

## See Also

### Delete Rules

- [NSDeleteRule.noActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSDeleteRule.cascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDeleteRule.denyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

# NSNullifyDeleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that nullifies the inverse relationship of the referenced managed objects.

## Declaration

```objectivec
NSNullifyDeleteRule
```

## See Also

### Delete Rules

- [NSNoActionDeleteRule](noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSCascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDenyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.
