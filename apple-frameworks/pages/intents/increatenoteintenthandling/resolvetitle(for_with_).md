> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintenthandling/resolvetitle(for:with:)](https://developer.apple.com/documentation/intents/increatenoteintenthandling/resolvetitle(for:with:))

# resolveTitle(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the title of the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveTitle(for intent: INCreateNoteIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveTitle(for intent: INCreateNoteIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the title text that you intend to use for the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the title for a note. Use the intent object to obtain the title, if any, suggested by the user. The title represents the initial text that users see for the note.

If the intent does not contain title information, choose a resolution that is most appropriate for your app. If you can extract the title information from the note’s content, return a result of success with the title string you extracted. Otherwise, you can return a result of not required if you do not require a title.

## See Also

### Resolving the Intent Parameters

- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the main content of the note.
- [resolveGroupName(for:with:)](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.

# resolveTitleForCreateNote:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the title of the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveTitleForCreateNote:(INCreateNoteIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the title text that you intend to use for the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the title for a note. Use the intent object to obtain the title, if any, suggested by the user. The title represents the initial text that users see for the note.

If the intent does not contain title information, choose a resolution that is most appropriate for your app. If you can extract the title information from the note’s content, return a result of success with the title string you extracted. Otherwise, you can return a result of not required if you do not require a title.

## See Also

### Resolving the Intent Parameters

- [resolveContentForCreateNote:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the main content of the note.
- [resolveGroupNameForCreateNote:withCompletion:](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.
