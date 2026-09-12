> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessionprotocol/invalidate(errormessage:)](https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol/invalidate(errormessage:))

# invalidate(errorMessage:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Closes the reader session and displays an error message to the user.

## Declaration

```swift
func invalidate(errorMessage: String)
```

## Parameters

- `errorMessage`: The error message to display.

<a id="Discussion"></a>

## Discussion

Use this method to end the reader session and display a message to the user when an error condition occurs after the app successfully reads a tag. This type of error can occur if, for example, the app reads data from an NFC tag, but determines that the data has expired and discards it. The app then calls [invalidate(errorMessage:)](invalidate%28errormessage_%29.md) to end the reader session, and to let the user know why it discarded the data.

> **Note**

>  After invalidating a reader session, you cannot use it to scan and detect other tags.

## See Also

### Managing a Reader Session

- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.

# invalidateSessionWithErrorMessage: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Closes the reader session and displays an error message to the user.

## Declaration

```objectivec
- (void) invalidateSessionWithErrorMessage:(NSString *) errorMessage;
```

## Parameters

- `errorMessage`: The error message to display.

<a id="Discussion"></a>

## Discussion

Use this method to end the reader session and display a message to the user when an error condition occurs after the app successfully reads a tag. This type of error can occur if, for example, the app reads data from an NFC tag, but determines that the data has expired and discards it. The app then calls [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md) to end the reader session, and to let the user know why it discarded the data.

> **Note**

>  After invalidating a reader session, you cannot use it to scan and detect other tags.

## See Also

### Managing a Reader Session

- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [alertMessage](alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
