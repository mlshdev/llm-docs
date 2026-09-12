> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/dynamicoptionsprovider/defaultresult()-57ptr](https://developer.apple.com/documentation/appintents/dynamicoptionsprovider/defaultresult()-57ptr)

# defaultResult()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The default value for parameters using this provider when no value is provided by the user.

## Declaration

```swift
func defaultResult() async -> Self.DefaultValue?
```

<a id="discussion"></a>

## Discussion

Either a single value or an array of values may be provided. If an array is provided and the parameter requires a single value, only the first element of the array is used.
