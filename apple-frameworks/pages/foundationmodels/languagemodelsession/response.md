> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/response](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/response)

# LanguageModelSession.Response

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A structure that stores the output of a response call.

## Declaration

```swift
struct Response<Content> where Content : Generable
```

## Topics

### Getting the response content

- [content](response/content.md): The response content.
- [rawContent](response/rawcontent.md): The raw response content.

### Inspecting the usage tokens

- [usage](response/usage.md): Information about how many tokens were used by this response.

### Getting the transcript entries

- [transcriptEntries](response/transcriptentries.md): The list of transcript entries.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Generating a response

- [isResponding](isresponding.md): A Boolean value that indicates whether a response is being generated.
- [respond(options:prompt:)](respond%28options_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:includeSchemaInPrompt:options:prompt:)](respond%28generating_includeschemainprompt_options_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:includeSchemaInPrompt:options:prompt:)](respond%28schema_includeschemainprompt_options_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:)](respond%28to_options_%29.md): Produces a response to a prompt.
- [respond(to:generating:includeSchemaInPrompt:options:)](respond%28to_generating_includeschemainprompt_options_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
