> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/setfocusfilterintenterror/missingparametervalue](https://developer.apple.com/documentation/appintents/setfocusfilterintenterror/missingparametervalue)

# SetFocusFilterIntentError.missingParameterValue

**Framework:** App Intents  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS · watchOS 9.4+

An error indicating that the intent has an invalid parameter value.

## Declaration

```swift
case missingParameterValue
```

<a id="discussion"></a>

## Discussion

For example, an intent has a non-optional parameter but it doesn’t have a default value.

## See Also

### Getting the error codes

- [SetFocusFilterIntentError.notFound](notfound.md)
