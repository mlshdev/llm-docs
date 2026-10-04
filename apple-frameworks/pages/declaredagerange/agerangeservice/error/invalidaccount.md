> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/agerangeservice/error/invalidaccount

# AgeRangeService.Error.invalidAccount

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Indicates the current Apple Account isn’t eligible for age range sharing.

## Declaration

```swift
case invalidAccount
```

<a id="discussion"></a>

## Discussion

You receive this error when no Apple Account is signed in on the device, or when the signed-in account, such as a managed or enterprise account, isn’t eligible to share an age range.
