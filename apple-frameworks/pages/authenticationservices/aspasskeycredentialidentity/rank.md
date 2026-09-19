> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/rank

# rank (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An indicator that enables you to prioritize credential identities relative to each other.

## Declaration

```swift
var rank: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The system may use the rank to select between credential identities if multiple identities have the same service identifier. A credential identity with a high rank gets precedence over a lower-ranked identity with the same service identifier. The default value is 0.

# rank (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An indicator that enables you to prioritize credential identities relative to each other.

## Declaration

```objectivec
@property (nonatomic) NSInteger rank;
```

<a id="Discussion"></a>

## Discussion

The system may use the rank to select between credential identities if multiple identities have the same service identifier. A credential identity with a high rank gets precedence over a lower-ranked identity with the same service identifier. The default value is 0.
