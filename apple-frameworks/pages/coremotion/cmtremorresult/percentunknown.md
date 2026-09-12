> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmtremorresult/percentunknown](https://developer.apple.com/documentation/coremotion/cmtremorresult/percentunknown)

# percentUnknown (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The percentage of time when the algorithm couldn’t make a determination.

## Declaration

```swift
var percentUnknown: Float { get }
```

<a id="Discussion"></a>

## Discussion

Both active motion and low signal level can cause `percentUnknown` results.

## See Also

### Accessing Tremor Data

- [percentNone](percentnone.md): The percentage of time when no tremor was detected.
- [percentSlight](percentslight.md): The percentage of time when a tremor was likely, and the displacement amplitude was slight.
- [percentMild](percentmild.md): The percentage of time when a tremor was likely, and the displacement amplitude was mild.
- [percentModerate](percentmoderate.md): The percentage of time when a tremor was likely, and the displacement amplitude was moderate.
- [percentStrong](percentstrong.md): The percentage of time when a tremor was likely, and the displacement amplitude was strong.

# percentUnknown (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The percentage of time when the algorithm couldn’t make a determination.

## Declaration

```objectivec
@property (nonatomic, readonly) float percentUnknown;
```

<a id="Discussion"></a>

## Discussion

Both active motion and low signal level can cause `percentUnknown` results.

## See Also

### Accessing Tremor Data

- [percentNone](percentnone.md): The percentage of time when no tremor was detected.
- [percentSlight](percentslight.md): The percentage of time when a tremor was likely, and the displacement amplitude was slight.
- [percentMild](percentmild.md): The percentage of time when a tremor was likely, and the displacement amplitude was mild.
- [percentModerate](percentmoderate.md): The percentage of time when a tremor was likely, and the displacement amplitude was moderate.
- [percentStrong](percentstrong.md): The percentage of time when a tremor was likely, and the displacement amplitude was strong.
