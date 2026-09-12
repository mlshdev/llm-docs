> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/assignrole(_:)](https://developer.apple.com/documentation/groupactivities/systemcoordinator/assignrole(_:))

# assignRole(\_:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Assigns the given spatial template role to the local participant.

## Declaration

```swift
final func assignRole(_ role: some SpatialTemplateRole)
```

<a id="discussion"></a>

## Discussion

For example, in a table tennis game with two teams you might have the following:

```swift
switch selectedTeam {
case .blue:
    systemCoordinator.assignRole(TableTennisTemplate.Role.blueTeam)
case .red:
    systemCoordinator.assignRole(TableTennisTemplate.Role.redTeam)
}
```

Note that assigning a given role does not guarantee that the participant will be placed in a *seat* with that role. If more participants are assigned a role than there are seats for that role, the participant may be placed in a non-roled seat instead. In most cases, your app should try to avoid allowing for that scenario.

> **Warning**

> You should only assign roles that exist in the current spatial template.
>
> This method will emit a runtime warning if the given role is not assigned to a seat in the current [spatialTemplatePreference](configuration-swift.struct/spatialtemplatepreference.md).

## See Also

### Assigning the local participant role

- [resignRole()](resignrole%28%29.md): Resigns the local participant from their current spatial template role.
