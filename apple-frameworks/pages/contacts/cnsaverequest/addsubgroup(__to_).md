> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/addsubgroup(_:to:)](https://developer.apple.com/documentation/contacts/cnsaverequest/addsubgroup(_:to:))

# addSubgroup(\_:to:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Add the specified group to a parent group.

## Declaration

```swift
func addSubgroup(_ subgroup: CNGroup, to group: CNGroup)
```

## Parameters

- `subgroup`: The subgroup to add.
- `group`: The parent group in which to add `subgroup`.

<a id="Discussion"></a>

## Discussion

If you previously tried to remove `subgroup` from `group` in the same save request, calling this method undoes that removal. The last change you make is the one that takes effect.

## See Also

### Adding and removing subgroups

- [removeSubgroup(\_:from:)](removesubgroup%28__from_%29.md): Remove a subgroup from the specified parent group.

# addSubgroup:toGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Add the specified group to a parent group.

## Declaration

```objectivec
- (void) addSubgroup:(CNGroup *) subgroup toGroup:(CNGroup *) group;
```

## Parameters

- `subgroup`: The subgroup to add.
- `group`: The parent group in which to add `subgroup`.

<a id="Discussion"></a>

## Discussion

If you previously tried to remove `subgroup` from `group` in the same save request, calling this method undoes that removal. The last change you make is the one that takes effect.

## See Also

### Adding and removing subgroups

- [removeSubgroup:fromGroup:](removesubgroup%28__from_%29.md): Remove a subgroup from the specified parent group.
