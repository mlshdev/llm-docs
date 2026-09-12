> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintenthandling/resolvecontent(for:with:)](https://developer.apple.com/documentation/intents/inappendtonoteintenthandling/resolvecontent(for:with:))

# resolveContent(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the content to append to the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveContent(for intent: INAppendToNoteIntent, with completion: @escaping @Sendable (INNoteContentResolutionResult) -> Void)
```

```swift
optional func resolveContent(for intent: INAppendToNoteIntent) async -> INNoteContentResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text or image that you intend to append to the main content of the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the content to append to a note. Use the intent object to obtain the content specified by the user. If the intent doesn’t contain any content, you might want to prompt the user to specify a value.

## See Also

### Resolving the Intent Parameters

- [resolveTargetNote(for:with:)](resolvetargetnote%28for_with_%29.md): Deprecated. Resolves the note that receives the new content.

# resolveContentForAppendToNote:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the content to append to the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveContentForAppendToNote:(INAppendToNoteIntent *) intent withCompletion:(void (^)(INNoteContentResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text or image that you intend to append to the main content of the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the content to append to a note. Use the intent object to obtain the content specified by the user. If the intent doesn’t contain any content, you might want to prompt the user to specify a value.

## See Also

### Resolving the Intent Parameters

- [resolveTargetNoteForAppendToNote:withCompletion:](resolvetargetnote%28for_with_%29.md): Deprecated. Resolves the note that receives the new content.
