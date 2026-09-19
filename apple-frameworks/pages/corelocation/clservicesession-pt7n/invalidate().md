> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clservicesession-pt7n/invalidate()

# invalidate()

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Invalidates the services session.

## Declaration

```swift
final func invalidate()
```

<a id="Discussion"></a>

## Discussion

Call this method when your app or app extension no longer needs to monitor authorization access to location services.
