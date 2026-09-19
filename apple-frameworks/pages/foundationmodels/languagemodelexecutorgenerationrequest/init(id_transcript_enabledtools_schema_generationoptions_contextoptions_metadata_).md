> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationrequest/init(id:transcript:enabledtools:schema:generationoptions:contextoptions:metadata:)

# init(id:transcript:enabledTools:schema:generationOptions:contextOptions:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a generation request.

## Declaration

```swift
init(id: UUID, transcript: Transcript, enabledTools: [Transcript.ToolDefinition], schema: GenerationSchema? = nil, generationOptions: GenerationOptions, contextOptions: ContextOptions, metadata: [String : any ConvertibleToGeneratedContent])
```

## Parameters

- `id`: The request identifier.
- `transcript`: The transcript to generate the next entry for.
- `enabledTools`: The subset of tool definitions that the model can call.
- `schema`: The schema dictating the required output format.
- `generationOptions`: The generation options to use.
- `contextOptions`: The settings that configure how the model is prompted.
- `metadata`: The metadata to attach to the request.
