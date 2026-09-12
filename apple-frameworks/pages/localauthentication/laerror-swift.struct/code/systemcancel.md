> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/systemcancel](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/systemcancel)

# LAError.Code.systemCancel (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The system canceled authentication.

## Declaration

```swift
case systemCancel
```

<a id="Discussion"></a>

## Discussion

This might happen if another app comes to the foreground while your app displays the authentication dialog.

## See Also

### Cancellation

- [LAError.Code.appCancel](appcancel.md): The app canceled authentication.
- [LAError.Code.userCancel](usercancel.md): The user tapped the cancel button in the authentication dialog.

# LAErrorSystemCancel (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The system canceled authentication.

## Declaration

```objectivec
LAErrorSystemCancel
```

<a id="Discussion"></a>

## Discussion

This might happen if another app comes to the foreground while your app displays the authentication dialog.

## See Also

### Cancellation

- [LAErrorAppCancel](appcancel.md): The app canceled authentication.
- [LAErrorUserCancel](usercancel.md): The user tapped the cancel button in the authentication dialog.
