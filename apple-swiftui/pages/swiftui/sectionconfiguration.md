> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionconfiguration](https://developer.apple.com/documentation/swiftui/sectionconfiguration)

# SectionConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the contents of a section.

## Declaration

```swift
struct SectionConfiguration
```

<a id="overview"></a>

## Overview

A `SectionConfiguration` includes the content of the section, as well as its header and footer.

A `SectionConfiguration` can represent either an explicit section, or groups of sibling views that are not explicitly wrapped in a section.

Notably, the `header`, `footer` and `content` properties of a `SectionConfiguration` are all `SubviewsCollection`s as they can be made up of multiple subviews. That means in most cases, the subviews collection should be treated as a collection (either indexed into, or used with a `ForEach`), or the subviews collection should be wrapped in a container view, like a layout, or other custom container:

```swift
PinboardSectionsLayout {
    ForEach(sections: content) { section in
        VStack {
            HStack { section.header }
            section.content
            HStack { section.footer }
        }
    }
}
```

Here, we want to create one view for `PinboardSectionsLayout` to place per section in content. To do that, we surround the `ForEach` body in another container, a `VStack` layout, ensuring the different subviews of section.content are treated as a single view by the surrounding layout. Additionally, surrounding the header and footer in an `HStack` layout avoids vertically stacking subviews of the header and footer which we want visually grouped together.

## Topics

### Structures

- [SectionConfiguration.Actions](sectionconfiguration/actions-swift.struct.md): The type-erased actions of a section.
- [SectionConfiguration.ID](sectionconfiguration/id-swift.struct.md): A unique identifier for a section.

### Instance Properties

- [actions](sectionconfiguration/actions-swift.property.md): Custom actions associated with a section.
- [containerValues](sectionconfiguration/containervalues.md): The container values associated with the given section.
- [content](sectionconfiguration/content.md): The contents of the section body.
- [footer](sectionconfiguration/footer.md): The contents of the section footer.
- [header](sectionconfiguration/header.md): The contents of the section header.
- [id](sectionconfiguration/id-swift.property.md): A unique identifier representing the section.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Organizing views into sections

- [Section](section.md): A container view that you can use to add hierarchy within certain views.
- [SectionCollection](sectioncollection.md): An opaque collection representing the sections of view.
