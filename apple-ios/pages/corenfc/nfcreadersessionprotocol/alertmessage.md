> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessionprotocol/alertmessage](https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol/alertmessage)

# alertMessage (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A custom description that helps users understand how they can use NFC reader mode in your app.

## Declaration

```swift
var alertMessage: String { get set }
```

<a id="Discussion"></a>

## Discussion

Before you call [begin()](begin%28%29.md), use this property to supply a string that provides more context about how your app uses NFC reader mode. For example, you might tell users “Hold your iPhone near the item to learn more about it.” When tag scanning begins, your text is displayed to users in an alert. Note that the [alertMessage](alertmessage.md) string is different from the purpose string you supply for the [NFCReaderUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW74) key in your `Info.plist` file.

If you configure your NFC NDEF reader session to read multiple tags, you can update [alertMessage](alertmessage.md) to display different information after each tag is read (you can update this string in any thread context while the reader session remains valid).

## See Also

### Managing a Reader Session

- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [begin()](begin%28%29.md): Starts the reader session.
- [invalidate()](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.

# alertMessage (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A custom description that helps users understand how they can use NFC reader mode in your app.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * alertMessage;
```

<a id="Discussion"></a>

## Discussion

Before you call [beginSession](begin%28%29.md), use this property to supply a string that provides more context about how your app uses NFC reader mode. For example, you might tell users “Hold your iPhone near the item to learn more about it.” When tag scanning begins, your text is displayed to users in an alert. Note that the [alertMessage](alertmessage.md) string is different from the purpose string you supply for the [NFCReaderUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW74) key in your `Info.plist` file.

If you configure your NFC NDEF reader session to read multiple tags, you can update [alertMessage](alertmessage.md) to display different information after each tag is read (you can update this string in any thread context while the reader session remains valid).

## See Also

### Managing a Reader Session

- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [beginSession](begin%28%29.md): Starts the reader session.
- [invalidateSession](invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
