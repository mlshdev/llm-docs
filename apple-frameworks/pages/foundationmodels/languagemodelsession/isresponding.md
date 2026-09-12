> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/isresponding](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/isresponding)

# isResponding

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A Boolean value that indicates whether a response is being generated.

## Declaration

```swift
final var isResponding: Bool { get }
```

## Mentioned In

- [Generating content and performing tasks with Foundation Models](../generating-content-and-performing-tasks-with-foundation-models.md)

<a id="discussion"></a>

## Discussion

> **Important**

> You should not call any of the respond methods while this property is `true`.

Disable buttons and other interactions to prevent users from submitting a second prompt while the model is responding to their first prompt.

```swift
struct ShopView: View {
    @State var session = LanguageModelSession()
    @State var joke = ""

    var body: some View {
        Text(joke)
        Button("Generate joke") {
            Task {
                assert(!session.isResponding, "It should not be possible to tap this button while the model is responding")
                joke = try await session.respond(to: "Tell me a joke").content
            }
        }
        .disabled(session.isResponding) // Prevent concurrent calls to respond
    }
}
```

## See Also

### Generating a response

- [respond(options:prompt:)](respond%28options_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:includeSchemaInPrompt:options:prompt:)](respond%28generating_includeschemainprompt_options_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:includeSchemaInPrompt:options:prompt:)](respond%28schema_includeschemainprompt_options_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:)](respond%28to_options_%29.md): Produces a response to a prompt.
- [respond(to:generating:includeSchemaInPrompt:options:)](respond%28to_generating_includeschemainprompt_options_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
- [LanguageModelSession.Response](response.md): A structure that stores the output of a response call.
