> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationshareoptions/init(optionsgroups:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationshareoptions/init(optionsgroups:))

# init(optionsGroups:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration share options object with the array of groups.

## Declaration

```swift
convenience init(optionsGroups: [SWCollaborationOptionsGroup])
```

## Parameters

- `optionsGroups`: An array of [SWCollaborationOptionsGroup](../swcollaborationoptionsgroup.md) objects to customize how the system shares the collaboration.

## See Also

### Creating share options

- [init(coder:)](init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [init(optionsGroups:summary:)](init%28optionsgroups_summary_%29.md): Creates and initializes a collaboration share options object the array of groups and a summary string.

# initWithOptionsGroups: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration share options object with the array of groups.

## Declaration

```objectivec
- (instancetype) initWithOptionsGroups:(NSArray<SWCollaborationOptionsGroup *> *) optionsGroups;
```

## Parameters

- `optionsGroups`: An array of [SWCollaborationOptionsGroup](../swcollaborationoptionsgroup.md) objects to customize how the system shares the collaboration.

## See Also

### Creating share options

- [initWithCoder:](init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [initWithOptionsGroups:summary:](init%28optionsgroups_summary_%29.md): Creates and initializes a collaboration share options object the array of groups and a summary string.
- [shareOptionsWithOptionsGroups:](shareoptionswithoptionsgroups_.md): Creates and initializes a collaboration share options object with the array of groups.
- [shareOptionsWithOptionsGroups:summary:](shareoptionswithoptionsgroups_summary_.md): Creates and initializes a collaboration share options object the array of groups and a summary string.
