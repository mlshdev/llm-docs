> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextalternatives/selectedalternativestringnotification

# selectedAlternativeStringNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

Posted when the user selects an alternate string.

## Declaration

```swift
class let selectedAlternativeStringNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Arbitrary objects can listen for for this notification to get user selections of alternative strings. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSAlternativeString"` | The selected alternative string. |

To observe this notification using Swift concurrency, use [NSTextAlternatives.SelectedAlternativeStringMessage](selectedalternativestringmessage.md).

# NSTextAlternativesSelectedAlternativeStringNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.8+

Posted when the user selects an alternate string.

## Declaration

```objectivec
extern NSNotificationName NSTextAlternativesSelectedAlternativeStringNotification;
```

<a id="Discussion"></a>

## Discussion

Arbitrary objects can listen for for this notification to get user selections of alternative strings. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSAlternativeString"` | The selected alternative string. |

To observe this notification using Swift concurrency, use [NSTextAlternatives.SelectedAlternativeStringMessage](selectedalternativestringmessage.md).
