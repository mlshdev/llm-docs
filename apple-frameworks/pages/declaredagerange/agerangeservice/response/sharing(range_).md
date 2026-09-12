> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/response/sharing(range:)](https://developer.apple.com/documentation/declaredagerange/agerangeservice/response/sharing(range:))

# AgeRangeService.Response.sharing(range:)

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Contains the person’s shared age range information.

## Declaration

```swift
case sharing(range: AgeRangeService.AgeRange)
```

## Parameters

- `range`: The age range information provided by the person.

<a id="discussion"></a>

## Discussion

When you receive this response, the person successfully shared their age information. Use the associated `AgeRange` value to make appropriate content decisions for your app.

## See Also

### Getting the age range response

- [AgeRangeService.Response.declinedSharing](declinedsharing.md): Indicates the person declined to share their age range with your app.
