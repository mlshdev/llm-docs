> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/agerangeservice/error/notavailable

# AgeRangeService.Error.notAvailable

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates the system was unable to share the person’s age range.

## Declaration

```swift
case notAvailable
```

<a id="discussion"></a>

## Discussion

You receive this error when the system prompts a person and they decide not to share their age range with your app.

## See Also

### Interpreting error responses

- [AgeRangeService.Error.invalidRequest](invalidrequest.md): Indicates your request contains invalid parameters or configuration.
