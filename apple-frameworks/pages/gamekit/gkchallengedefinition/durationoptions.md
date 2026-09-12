> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengedefinition/durationoptions](https://developer.apple.com/documentation/gamekit/gkchallengedefinition/durationoptions)

# durationOptions (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The duration options for the challenge, like `1 day` or `1 week`.

## Declaration

```swift
var durationOptions: [DateComponents] { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> If set, the amount of weeks is stored in the `weekOfYear` field.

> **Important**

> The actual duration of the challenge may be dynamically adjusted in order to accommodate different factors like players’ timezones.

## See Also

### Getting the challenge rules

- [isRepeatable](isrepeatable.md): Indicates if a challenge can be attempted more than once.

# durationOptions (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The duration options for the challenge, like `1 day` or `1 week`.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSDateComponents *> * durationOptions;
```

<a id="discussion"></a>

## Discussion

> **Note**

> If set, the amount of weeks is stored in the `weekOfYear` field.

> **Important**

> The actual duration of the challenge may be dynamically adjusted in order to accommodate different factors like players’ timezones.

## See Also

### Getting the challenge rules

- [isRepeatable](isrepeatable.md): Indicates if a challenge can be attempted more than once.
