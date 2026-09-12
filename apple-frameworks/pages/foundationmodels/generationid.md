> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationid](https://developer.apple.com/documentation/foundationmodels/generationid)

# GenerationID

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A unique identifier that is stable for the duration of a response, but not across responses.

## Declaration

```swift
struct GenerationID
```

<a id="overview"></a>

## Overview

The framework guarantees a `GenerationID` to be both present and stable when you receive it from a [LanguageModelSession](languagemodelsession.md). When you create an instance of `GenerationID` there is no guarantee an identifier is present or stable.

```swift
@Generable struct Person: Equatable {
    var id: GenerationID
    var name: String
}

struct PeopleView: View {
    @State private var session = LanguageModelSession()
    @State private var people = [Person.PartiallyGenerated]()

    var body: some View {
        // A person's name changes as the response is generated,
        // and two people can have the same name, so it is not suitable
        // for use as an id.
        //
        // `GenerationID` receives special treatment and is guaranteed
        // to be both present and stable.
        List {
            ForEach(people) { person in
                Text("Name: \(person.name)")
            }
        }
        .task {
            do {
                for try! await people in stream.streamResponse(
                    to: "Who were the first 3 presidents of the US?",
                    generating: [Person].self
                ) {
                    withAnimation {
                        self.people = people
                }
            } catch {
                // Handle the thrown error.
            }
        }
    }
}
```

## Topics

### Creating an identifier

- [init()](generationid/init%28%29.md): Creates a unique identifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a generation

- [id](generatedcontent/id.md): A unique id that is stable for the duration of a generated response.
