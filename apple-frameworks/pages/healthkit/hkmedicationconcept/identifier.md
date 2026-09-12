> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationconcept/identifier](https://developer.apple.com/documentation/healthkit/hkmedicationconcept/identifier)

# identifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The unique identifier for the specific medication concept.

## Declaration

```swift
@NSCopying var identifier: HKHealthConceptIdentifier { get }
```

<a id="discussion"></a>

## Discussion

Each concept has one stable identifier that stays the same across devices. You can use this identifier to directly compare medications, for example, to check whether two objects represent the same medication.

# identifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The unique identifier for the specific medication concept.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKHealthConceptIdentifier * identifier;
```

<a id="discussion"></a>

## Discussion

Each concept has one stable identifier that stays the same across devices. You can use this identifier to directly compare medications, for example, to check whether two objects represent the same medication.
