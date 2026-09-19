> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlocation/isequal(_:)

# isEqual(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns `true` for locations representing the same document position.

## Declaration

```swift
func isEqual(_ location: Any?) -> Bool
```

<a id="discussion"></a>

## Discussion

Must not depend on auxiliary state such as affinity or visual-edge preference. Locations from different data source methods are compared using `isEqual:` and must agree when they refer to the same position.

# isEqual: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns `true` for locations representing the same document position.

## Declaration

```objectivec
- (BOOL) isEqual:(id) location;
```

<a id="discussion"></a>

## Discussion

Must not depend on auxiliary state such as affinity or visual-edge preference. Locations from different data source methods are compared using `isEqual:` and must agree when they refer to the same position.
