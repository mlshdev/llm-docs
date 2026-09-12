> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacredentialtype/applicationpassword](https://developer.apple.com/documentation/localauthentication/lacredentialtype/applicationpassword)

# LACredentialType.applicationPassword (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Specifies that a password is provided by the application.

## Declaration

```swift
case applicationPassword
```

<a id="Discussion"></a>

## Discussion

If not set, the user is prompted for their password when needed. When entered using the provided authentication dialog, the entered text is stored as UTF-8 encoded data.

## See Also

### Cases

- [LACredentialType.smartCardPIN](smartcardpin.md)

# LACredentialTypeApplicationPassword (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Specifies that a password is provided by the application.

## Declaration

```objectivec
LACredentialTypeApplicationPassword
```

<a id="Discussion"></a>

## Discussion

If not set, the user is prompted for their password when needed. When entered using the provided authentication dialog, the entered text is stored as UTF-8 encoded data.

## See Also

### Cases

- [LACredentialTypeSmartCardPIN](smartcardpin.md)
