> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlocation/isequal(_:)

# isEqual(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns `true` for locations representing the same document position.

## Declaration

```swift
func isEqual(_ location: Any?) -> Bool
```

<a id="discussion"></a>

## Discussion

Must not depend on auxiliary state such as affinity or visual-edge preference. Locations from different data source methods are compared using `isEqual:` and must agree when they refer to the same position.

# isEqual: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns `true` for locations representing the same document position.

## Declaration

```objectivec
- (BOOL) isEqual:(id) location;
```

<a id="discussion"></a>

## Discussion

Must not depend on auxiliary state such as affinity or visual-edge preference. Locations from different data source methods are compared using `isEqual:` and must agree when they refer to the same position.
