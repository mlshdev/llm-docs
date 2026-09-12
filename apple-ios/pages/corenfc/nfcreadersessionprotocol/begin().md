> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessionprotocol/begin()](https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol/begin())

# begin() (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Starts the reader session.

## Declaration

```swift
func begin()
```

## See Also

### Managing a Reader Session

- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.

# beginSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Starts the reader session.

## Declaration

```objectivec
- (void) beginSession;
```

## See Also

### Managing a Reader Session

- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
