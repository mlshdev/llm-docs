> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentitemcollection](https://developer.apple.com/documentation/appintents/intentitemcollection)

# IntentItemCollection

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Return this object to provide an advanced list of options, optionally divided in sections.

## Declaration

```swift
struct IntentItemCollection<Result> where Result : _IntentValue
```

<a id="Example"></a>

## Example

```swift
struct CreateBookIntent: AppIntent {
    @Parameter(title: "Author Name", optionsProvider: AuthorNamesOptionsProvider())
    var authorName: String

    struct AuthorNamesOptionsProvider: DynamicOptionsProvider {
        func results() async throws -> ItemCollection<Int> {
            ItemCollection {
                ItemSection("Italian Authors") {
                    "Dante Alighieri"
                    "Alessandro Manzoni"
                }
                ItemSection("Russian Authors") {
                    "Anton Chekhov"
                    "Fyodor Dostoevsky"
                }
            }
        }
    }
}
```

## Topics

### Initializers

- [init(promptLabel:usesIndexedCollation:items:)](intentitemcollection/init%28promptlabel_usesindexedcollation_items_%29.md): Create a `ItemCollection` containing `Items`, or one or more `Sections`.
- [init(promptLabel:usesIndexedCollation:sections:)](intentitemcollection/init%28promptlabel_usesindexedcollation_sections_%29.md): Create an `ItemCollection` containing one or more `Sections`.
- [init(promptLabel:usesIndexedCollation:sectionsBuilder:)](intentitemcollection/init%28promptlabel_usesindexedcollation_sectionsbuilder_%29.md): Create an `ItemCollection` containing `Items`, or one or more `Sections` provided by a builder.

### Instance Properties

- [items](intentitemcollection/items.md): Returns all results as an array.
- [sections](intentitemcollection/sections.md)

### Type Properties

- [empty](intentitemcollection/empty.md): Returns an empty result.

## Relationships

### Conforms To

- [ResultsCollection](resultscollection.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items and collections

- [IntentItem](intentitem.md): A type describing a value returned from a dynamic options provider, plus information about how to display it to users.
- [IntentItemSection](intentitemsection.md): An object you use to divide dynamic options into sections.
- [IntentCollectionSize](intentcollectionsize.md)
- [IntentResponseStream](intentresponsestream.md)
