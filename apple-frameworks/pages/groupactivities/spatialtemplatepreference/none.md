> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference/none](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference/none)

# none

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

An arrangement where the system places spatial Personas based on your app’s content.

## Declaration

```swift
static let none: SpatialTemplatePreference
```

<a id="discussion"></a>

## Discussion

With this option, the system examines your app’s content to determine the best arrangement. For content in a vertical plane such as a window, the system arranges participants side by side and facing the content. For volumes, the system surrounds the volume with the participants. This option is the default.

## See Also

### Getting the spatial position preferences

- [sideBySide](sidebyside.md): An arrangement where the participants sit in a line with the content in front of them.
- [conversational](conversational.md): An arrangement where the participants can see one another and the app’s content.
- [custom(\_:)](custom%28__%29.md): Creates a template preference with the given custom spatial template.
