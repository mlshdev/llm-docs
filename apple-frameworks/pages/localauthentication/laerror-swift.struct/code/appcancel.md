> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/appcancel

# LAError.Code.appCancel (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The app canceled authentication.

## Declaration

```swift
case appCancel
```

<a id="Discussion"></a>

## Discussion

You receive this error if you call the [invalidate()](../../lacontext/invalidate%28%29.md) method while authentication is in process.

## See Also

### Cancellation

- [LAError.Code.systemCancel](systemcancel.md): The system canceled authentication.
- [LAError.Code.userCancel](usercancel.md): The user tapped the cancel button in the authentication dialog.

# LAErrorAppCancel (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

The app canceled authentication.

## Declaration

```objectivec
LAErrorAppCancel
```

<a id="Discussion"></a>

## Discussion

You receive this error if you call the [invalidate](../../lacontext/invalidate%28%29.md) method while authentication is in process.

## See Also

### Cancellation

- [LAErrorSystemCancel](systemcancel.md): The system canceled authentication.
- [LAErrorUserCancel](usercancel.md): The user tapped the cancel button in the authentication dialog.
