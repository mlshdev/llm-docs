> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/error/invalidaccount](https://developer.apple.com/documentation/declaredagerange/agerangeservice/error/invalidaccount)

# AgeRangeService.Error.invalidAccount

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates the current Apple Account isn’t eligible for age range sharing.

## Declaration

```swift
case invalidAccount
```

<a id="discussion"></a>

## Discussion

You receive this error when no Apple Account is signed in on the device, or when the signed-in account, such as a managed or enterprise account, isn’t eligible to share an age range.
