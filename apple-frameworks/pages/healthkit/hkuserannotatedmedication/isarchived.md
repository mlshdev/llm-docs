> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkuserannotatedmedication/isarchived

# isArchived (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether a medication is archived.

## Declaration

```swift
var isArchived: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value is `true` if a person moves a medication to the archived section in the Health App. The value is `false` if a medication isn’t in the archived section.

# isArchived (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether a medication is archived.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isArchived;
```

<a id="discussion"></a>

## Discussion

The value is `true` if a person moves a medication to the archived section in the Health App. The value is `false` if a medication isn’t in the archived section.
