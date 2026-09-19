> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/cameracaptureintent/appcontext-swift.associatedtype

# AppContext

**Framework:** App Intents  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Container type used for storing and retrieving app specific information that can be accessed whenever (and wherever) this intent gets run

## Declaration

```swift
associatedtype AppContext : Decodable, Encodable, Sendable = Never
```

<a id="discussion"></a>

## Discussion

Default Value: `Never`
