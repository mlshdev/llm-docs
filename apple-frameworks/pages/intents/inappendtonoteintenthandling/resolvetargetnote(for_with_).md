> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintenthandling/resolvetargetnote(for:with:)](https://developer.apple.com/documentation/intents/inappendtonoteintenthandling/resolvetargetnote(for:with:))

# resolveTargetNote(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the note that receives the new content.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTargetNote(for intent: INAppendToNoteIntent, with completion: @escaping @Sendable (INNoteResolutionResult) -> Void)
```

```swift
optional func resolveTargetNote(for intent: INAppendToNoteIntent) async -> INNoteResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INNote](../innote.md) object containing the content that you intend to modify.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve which note receives new content. Use the intent object to identify which note the user wants to modify. If the intent doesn’t identify a specific note, you might want to prompt the user to specify a value or you might indicate success and select a default note.

## See Also

### Resolving the Intent Parameters

- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the content to append to the note.

# resolveTargetNoteForAppendToNote:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the note that receives the new content.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTargetNoteForAppendToNote:(INAppendToNoteIntent *) intent withCompletion:(void (^)(INNoteResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INNote](../innote.md) object containing the content that you intend to modify.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve which note receives new content. Use the intent object to identify which note the user wants to modify. If the intent doesn’t identify a specific note, you might want to prompt the user to specify a value or you might indicate success and select a default note.

## See Also

### Resolving the Intent Parameters

- [resolveContentForAppendToNote:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the content to append to the note.
