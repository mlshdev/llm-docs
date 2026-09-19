> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uievent/timestamp

# timestamp (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The time when the event occurred.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the number of seconds that have elapsed since system startup. For a description of this time value, see the description of the [systemUptime](../../foundation/processinfo/systemuptime.md) method of the [ProcessInfo](../../foundation/processinfo.md) class.

# timestamp (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The time when the event occurred.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

<a id="Discussion"></a>

## Discussion

This property contains the number of seconds that have elapsed since system startup. For a description of this time value, see the description of the [systemUptime](../../foundation/processinfo/systemuptime.md) method of the [NSProcessInfo](../../foundation/processinfo.md) class.
