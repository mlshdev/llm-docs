> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msrecipient/phonenumber](https://developer.apple.com/documentation/messages/msrecipient/phonenumber)

# phoneNumber

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The phone number of a critical message recipient.

## Declaration

```swift
var phoneNumber: String
```

<a id="Discussion"></a>

## Discussion

The phone number of a critical message recipient. When the framework calls [requestAuthorization(for:)](../mscriticalsmsmessenger/requestauthorization%28for_%29.md) it shows this phone number to a person.
