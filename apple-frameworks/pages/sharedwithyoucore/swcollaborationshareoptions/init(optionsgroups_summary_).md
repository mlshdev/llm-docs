> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationshareoptions/init(optionsgroups:summary:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationshareoptions/init(optionsgroups:summary:))

# init(optionsGroups:summary:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration share options object the array of groups and a summary string.

## Declaration

```swift
init(optionsGroups: [SWCollaborationOptionsGroup], summary: String)
```

## Parameters

- `optionsGroups`: An array of [SWCollaborationOptionsGroup](../swcollaborationoptionsgroup.md) objects to customize how the system shares the collaboration.
- `summary`: A localized string to summarize the collaboration options.

## See Also

### Creating share options

- [init(coder:)](init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [init(optionsGroups:)](init%28optionsgroups_%29.md): Creates and initializes a collaboration share options object with the array of groups.

# initWithOptionsGroups:summary: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration share options object the array of groups and a summary string.

## Declaration

```objectivec
- (instancetype) initWithOptionsGroups:(NSArray<SWCollaborationOptionsGroup *> *) optionsGroups summary:(NSString *) summary;
```

## Parameters

- `optionsGroups`: An array of [SWCollaborationOptionsGroup](../swcollaborationoptionsgroup.md) objects to customize how the system shares the collaboration.
- `summary`: A localized string to summarize the collaboration options.

## See Also

### Creating share options

- [initWithCoder:](init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [initWithOptionsGroups:](init%28optionsgroups_%29.md): Creates and initializes a collaboration share options object with the array of groups.
- [shareOptionsWithOptionsGroups:](shareoptionswithoptionsgroups_.md): Creates and initializes a collaboration share options object with the array of groups.
- [shareOptionsWithOptionsGroups:summary:](shareoptionswithoptionsgroups_summary_.md): Creates and initializes a collaboration share options object the array of groups and a summary string.
