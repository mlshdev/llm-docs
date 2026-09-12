> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference/sidebyside](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference/sidebyside)

# sideBySide

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

An arrangement where the participants sit in a line with the content in front of them.

## Declaration

```swift
static let sideBySide: SpatialTemplatePreference
```

<a id="discussion"></a>

## Discussion

The participants are side by side and face your app’s shared content. This arrangement works best for windows and other vertically oriented content. For example, you might use it for a group of participants watching a movie. However, you can apply it to any for other content configurations.

For example:

```swift
        App

A     B     C     D
```

## See Also

### Getting the spatial position preferences

- [none](none.md): An arrangement where the system places spatial Personas based on your app’s content.
- [conversational](conversational.md): An arrangement where the participants can see one another and the app’s content.
- [custom(\_:)](custom%28__%29.md): Creates a template preference with the given custom spatial template.
