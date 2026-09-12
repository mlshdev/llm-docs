> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmedia-1onzj](https://developer.apple.com/documentation/sirikitcloudmedia/playmedia-1onzj)

# Get a Media Queue

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Web Service Endpoint  
**Availability:** SiriKit Cloud Media 1.0.2+

Provide a playback queue from a successfully processed play media intent.

## URL

```http
POST https://cloudextension-testservice.local/api/queues/playMedia
```

## Header Parameters

- `Accept-Language` — `string` (required): The client’s current user interface language. Respond with localized content for this language, if available.
- `User-Agent` — `string` (required): The extension protocol running on the client. This is an RFC 7231-compliant string that contains the product name *AppleCloudExtension* and the SiriKit Extension library version running on the client.
  **Maximum length:** `250`  
  **Allowed values:** `/AppleCloudExtension/([0-9]+\.[0-9]+\.[0-9]+) *.*/`
- `x-applecloudextension-retry-count` — `uint32`: The number of previous requests from the client. The client omits this header on the first attempt.
  **Minimum:** `1`
- `x-applecloudextension-session-id` — `string` (required): A constant session identifier to include in each request and response. Respond to each request with the session ID the client sends in that request.
  **Minimum length:** `1`  
  **Maximum length:** `128`

## HTTP Body

Content type: `application/json`

Type: `PlayMediaRequest`

A [UserActivity](useractivity.md) and constraints for the queue your service provides.

## Response Codes

- `200` OK — `Queue`: The request is successful.
- `204` No Content: No more content exists for the requested queue.
- `401` Unauthorized: The request requires authorization. The client may attempt to reauthorize and then retry.
- `410` Gone: The request’s [UserActivity](useractivity.md) is permanently expired and invalid for requesting a queue.

<a id="Discussion"></a>

## Discussion

There isn’t a default path for this endpoint. Specify the URL for this endpoint in your [ExtensionConfig.Media.Queues.PlayMedia](extensionconfig/media-data.dictionary/queues-data.dictionary/playmedia-data.dictionary.md) object.

## Topics

### Receiving a Queue Request

- [PlayMediaRequest](playmediarequest.md): A request for a media playback queue.

### Creating or Updating a Playback Queue

- [Queue](queue.md): A sequence of media content for playback, with links to the previous and next segments of a full playback queue.
- [QueueIdentifier](queueidentifier.md): A stable identifier for a playback queue.
- [QueueInsertPointer](queueinsertpointer.md): Instructions for editing the current playback queue.
- [QueuePlayPointer](queueplaypointer.md): A position within a playback queue.

### Providing Queue Items

- [Content](content.md): A description of a piece of playback content, such as a song, podcast, or advertisement.
- [ContentIdentifier](contentidentifier.md): An identifier for a song, podcast, ad, or other media content. The identifier must be stable and unique within a queue.
- [ContentAttributes](contentattributes.md): Metadata for some media content.

### Customizing Playback Controls

- [QueueControlMapping](queuecontrolmapping.md): A dictionary of configuration names and the media controls they permit.
- [PlayMediaControl](playmediacontrol.md): A configuration for permitted user interactions and other player behaviors during playback.
- [PlayMediaControlScheme](playmediacontrolscheme.md): Default playback controls and settings for common content types.
- [PlayMediaControlCommandSet](playmediacontrolcommandset.md): A set of modifications to apply to the default set of available playback controls.

## See Also

### Media Play Queues

- [Process a Play Media Intent](playmedia-1g2o9.md): Interpret the user’s request to play a media item, and provide instructions to access a corresponding playback queue.
