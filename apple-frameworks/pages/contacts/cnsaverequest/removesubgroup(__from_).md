> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/removesubgroup(_:from:)](https://developer.apple.com/documentation/contacts/cnsaverequest/removesubgroup(_:from:))

# removeSubgroup(\_:from:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Remove a subgroup from the specified parent group.

## Declaration

```swift
func removeSubgroup(_ subgroup: CNGroup, from group: CNGroup)
```

## Parameters

- `subgroup`: The subgroup to remove.
- `group`: The parent group containing `subgroup`.

<a id="Discussion"></a>

## Discussion

If you previously tried to add `subgroup` to `group` in the same save request, calling this method undoes that addition. The last change you make is the one that takes effect.

## See Also

### Adding and removing subgroups

- [addSubgroup(\_:to:)](addsubgroup%28__to_%29.md): Add the specified group to a parent group.

# removeSubgroup:fromGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Remove a subgroup from the specified parent group.

## Declaration

```objectivec
- (void) removeSubgroup:(CNGroup *) subgroup fromGroup:(CNGroup *) group;
```

## Parameters

- `subgroup`: The subgroup to remove.
- `group`: The parent group containing `subgroup`.

<a id="Discussion"></a>

## Discussion

If you previously tried to add `subgroup` to `group` in the same save request, calling this method undoes that addition. The last change you make is the one that takes effect.

## See Also

### Adding and removing subgroups

- [addSubgroup:toGroup:](addsubgroup%28__to_%29.md): Add the specified group to a parent group.
