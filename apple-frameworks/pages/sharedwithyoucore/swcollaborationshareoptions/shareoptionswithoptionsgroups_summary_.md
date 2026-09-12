> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationshareoptions/shareoptionswithoptionsgroups:summary:](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationshareoptions/shareoptionswithoptionsgroups:summary:)

# shareOptionsWithOptionsGroups:summary:

**Interface language:** Objective-C

**Framework:** Shared with You Core  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration share options object the array of groups and a summary string.

## Declaration

```objectivec
+ (SWCollaborationShareOptions *) shareOptionsWithOptionsGroups:(NSArray<SWCollaborationOptionsGroup *> *) optionsGroups summary:(NSString *) summary;
```

## Parameters

- `optionsGroups`: An array of [SWCollaborationOptionsGroup](../swcollaborationoptionsgroup.md) objects to customize how the system shares the collaboration.
- `summary`: A localized string to summarize the collaboration options.

<a id="return-value"></a>

## Return Value

A `SWCollaborationShareOptions` object.

## See Also

### Creating share options

- [initWithCoder:](init%28coder_%29.md): Creates and initializes a collaboration share options object.
- [initWithOptionsGroups:](init%28optionsgroups_%29.md): Creates and initializes a collaboration share options object with the array of groups.
- [initWithOptionsGroups:summary:](init%28optionsgroups_summary_%29.md): Creates and initializes a collaboration share options object the array of groups and a summary string.
- [shareOptionsWithOptionsGroups:](shareoptionswithoptionsgroups_.md): Creates and initializes a collaboration share options object with the array of groups.
