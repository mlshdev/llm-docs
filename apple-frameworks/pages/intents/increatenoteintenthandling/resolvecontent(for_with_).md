> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintenthandling/resolvecontent(for:with:)](https://developer.apple.com/documentation/intents/increatenoteintenthandling/resolvecontent(for:with:))

# resolveContent(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the main content of the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveContent(for intent: INCreateNoteIntent, with completion: @escaping @Sendable (INNoteContentResolutionResult) -> Void)
```

```swift
optional func resolveContent(for intent: INCreateNoteIntent) async -> INNoteContentResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text or image that you intend to use as the main content of the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the main contnet for a note. Use the intent object to obtain the content specified by the user. If the intent does not contain any content, you might want to prompt the user to specify a value. However, if there is a note title and it is sufficient for creating the note, you can also return a result indicating that a value for the content is not required.

## See Also

### Resolving the Intent Parameters

- [resolveTitle(for:with:)](resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the note.
- [resolveGroupName(for:with:)](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.

# resolveContentForCreateNote:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the main content of the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveContentForCreateNote:(INCreateNoteIntent *) intent withCompletion:(void (^)(INNoteContentResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text or image that you intend to use as the main content of the note.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the main contnet for a note. Use the intent object to obtain the content specified by the user. If the intent does not contain any content, you might want to prompt the user to specify a value. However, if there is a note title and it is sufficient for creating the note, you can also return a result indicating that a value for the content is not required.

## See Also

### Resolving the Intent Parameters

- [resolveTitleForCreateNote:withCompletion:](resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the note.
- [resolveGroupNameForCreateNote:withCompletion:](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.
