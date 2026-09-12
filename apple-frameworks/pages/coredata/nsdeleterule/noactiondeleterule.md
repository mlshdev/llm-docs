> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsdeleterule/noactiondeleterule](https://developer.apple.com/documentation/coredata/nsdeleterule/noactiondeleterule)

# NSDeleteRule.noActionDeleteRule (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that prevents modification of the referenced managed objects.

## Declaration

```swift
case noActionDeleteRule
```

<a id="Discussion"></a>

## Discussion

If you use this delete rule, make sure you delete any referenced managed objects or nullify their inverse relationships. Otherwise, those objects will reference an object that doesn’t exist, and your persistent store will be in an inconsistent state.

## See Also

### Delete Rules

- [NSDeleteRule.nullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSDeleteRule.cascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDeleteRule.denyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

# NSNoActionDeleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rule that prevents modification of the referenced managed objects.

## Declaration

```objectivec
NSNoActionDeleteRule
```

<a id="Discussion"></a>

## Discussion

If you use this delete rule, make sure you delete any referenced managed objects or nullify their inverse relationships. Otherwise, those objects will reference an object that doesn’t exist, and your persistent store will be in an inconsistent state.

## See Also

### Delete Rules

- [NSNullifyDeleteRule](nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSCascadeDeleteRule](cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDenyDeleteRule](denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.
