> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol/invalidate()

# invalidate() (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Closes the reader session, which prevents it from being reused.

## Declaration

```swift
func invalidate()
```

## See Also

### Managing a Reader Session

- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.

# invalidateSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Closes the reader session, which prevents it from being reused.

## Declaration

```objectivec
- (void) invalidateSession;
```

## See Also

### Managing a Reader Session

- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
