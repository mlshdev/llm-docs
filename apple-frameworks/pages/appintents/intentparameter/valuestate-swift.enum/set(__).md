> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparameter/valuestate-swift.enum/set(_:)

# IntentParameter.ValueState.set(\_:)

**Framework:** App Intents  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The parameter was provided an initial value.

## Declaration

```swift
case set(Value)
```

<a id="discussion"></a>

## Discussion

For optional types, the value could be an explicit `nil` or parameter resolution could have resulted in `nil`
