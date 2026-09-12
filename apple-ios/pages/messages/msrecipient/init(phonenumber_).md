> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msrecipient/init(phonenumber:)](https://developer.apple.com/documentation/messages/msrecipient/init(phonenumber:))

# init(phoneNumber:)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Creates a new critical message recipient with the provided phone number.

## Declaration

```swift
init(phoneNumber: String)
```

## Parameters

- `phoneNumber`: A phone number that conforms to the [E.164 — international public telecommunication numbering plan](https://www.itu.int/rec/T-REC-E.164-201011-I/en), without any non-numeric characters such as parentheses, periods, dashes, or a plus character (+) that introduces a country code.

<a id="Discussion"></a>

## Discussion

Use this method to create a new critical message recipient. When delivering messages, the framework displays the phone number you provide here.

> **Note**

> If the framework can’t send a message due to an invalid phone number, the framework throws and [MSCriticalMessagingError.sendFailed](../mscriticalmessagingerror/sendfailed.md) error.
