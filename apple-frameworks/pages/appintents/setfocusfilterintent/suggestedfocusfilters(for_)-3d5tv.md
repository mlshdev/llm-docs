> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/setfocusfilterintent/suggestedfocusfilters(for:)-3d5tv](https://developer.apple.com/documentation/appintents/setfocusfilterintent/suggestedfocusfilters(for:)-3d5tv)

# suggestedFocusFilters(for:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

You can implement this method to return a list of suggested focus configurations. This is useful when the suggested focus configurations are different from the configuration when the focus is turned off.

## Declaration

```swift
static func suggestedFocusFilters(for context: FocusFilterSuggestionContext) async -> [Self]
```

## Parameters

- `context`: The focus configuration context which the suggested configurations could be determined from.

<a id="return-value"></a>

## Return Value

A list of suggested focus configurations where the first one is the most suggested configuration. Returns an empty array if there is no suggested focus configurations. The system will use the default value per parameters in this case.
