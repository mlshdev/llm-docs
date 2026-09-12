> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference/conversational](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference/conversational)

# conversational

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

An arrangement where the participants can see one another and the app’s content.

## Declaration

```swift
static let conversational: SpatialTemplatePreference
```

<a id="discussion"></a>

## Discussion

This arrangement works best when you want participants to converse with each other and also look at your app’s content.

For example:

```swift
      App

A             C

       B
```

## See Also

### Getting the spatial position preferences

- [none](none.md): An arrangement where the system places spatial Personas based on your app’s content.
- [sideBySide](sidebyside.md): An arrangement where the participants sit in a line with the content in front of them.
- [custom(\_:)](custom%28__%29.md): Creates a template preference with the given custom spatial template.
