> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentprojection/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** App Intents  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
final subscript<Value>(dynamicMember keyPath: KeyPath<Intent, Value>) -> Value.UnwrappedType where Value : _IntentValue { get }
```
